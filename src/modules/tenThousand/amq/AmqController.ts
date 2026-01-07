import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amq")
export default class AmqController {
  @operation({
    summary: "Get Amq",
  })
  @get()
  static getAmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amq",
  })
  @post("{id}")
  static createAmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

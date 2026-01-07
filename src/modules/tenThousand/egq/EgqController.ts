import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egq")
export default class EgqController {
  @operation({
    summary: "Get Egq",
  })
  @get()
  static getEgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egq",
  })
  @post("{id}")
  static createEgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

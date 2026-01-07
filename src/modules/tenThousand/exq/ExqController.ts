import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exq")
export default class ExqController {
  @operation({
    summary: "Get Exq",
  })
  @get()
  static getExq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exq",
  })
  @post("{id}")
  static createExq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

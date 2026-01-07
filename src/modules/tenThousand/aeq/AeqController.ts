import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeq")
export default class AeqController {
  @operation({
    summary: "Get Aeq",
  })
  @get()
  static getAeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeq",
  })
  @post("{id}")
  static createAeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

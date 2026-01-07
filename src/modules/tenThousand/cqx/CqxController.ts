import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqx")
export default class CqxController {
  @operation({
    summary: "Get Cqx",
  })
  @get()
  static getCqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqx",
  })
  @post("{id}")
  static createCqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

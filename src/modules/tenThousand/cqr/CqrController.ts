import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqr")
export default class CqrController {
  @operation({
    summary: "Get Cqr",
  })
  @get()
  static getCqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqr",
  })
  @post("{id}")
  static createCqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

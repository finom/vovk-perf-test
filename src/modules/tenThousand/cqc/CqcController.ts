import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqc")
export default class CqcController {
  @operation({
    summary: "Get Cqc",
  })
  @get()
  static getCqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqc",
  })
  @post("{id}")
  static createCqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

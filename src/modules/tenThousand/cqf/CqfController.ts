import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqf")
export default class CqfController {
  @operation({
    summary: "Get Cqf",
  })
  @get()
  static getCqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqf",
  })
  @post("{id}")
  static createCqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

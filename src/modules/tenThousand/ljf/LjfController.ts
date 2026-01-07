import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljf")
export default class LjfController {
  @operation({
    summary: "Get Ljf",
  })
  @get()
  static getLjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljf",
  })
  @post("{id}")
  static createLjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

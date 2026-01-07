import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljt")
export default class LjtController {
  @operation({
    summary: "Get Ljt",
  })
  @get()
  static getLjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljt",
  })
  @post("{id}")
  static createLjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjt")
export default class MjtController {
  @operation({
    summary: "Get Mjt",
  })
  @get()
  static getMjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjt",
  })
  @post("{id}")
  static createMjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

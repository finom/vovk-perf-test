import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czp")
export default class CzpController {
  @operation({
    summary: "Get Czp",
  })
  @get()
  static getCzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czp",
  })
  @post("{id}")
  static createCzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

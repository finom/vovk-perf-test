import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czq")
export default class CzqController {
  @operation({
    summary: "Get Czq",
  })
  @get()
  static getCzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czq",
  })
  @post("{id}")
  static createCzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

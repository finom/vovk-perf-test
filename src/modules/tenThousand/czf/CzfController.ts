import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czf")
export default class CzfController {
  @operation({
    summary: "Get Czf",
  })
  @get()
  static getCzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czf",
  })
  @post("{id}")
  static createCzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

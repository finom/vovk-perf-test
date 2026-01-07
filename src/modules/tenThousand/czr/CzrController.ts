import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czr")
export default class CzrController {
  @operation({
    summary: "Get Czr",
  })
  @get()
  static getCzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czr",
  })
  @post("{id}")
  static createCzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

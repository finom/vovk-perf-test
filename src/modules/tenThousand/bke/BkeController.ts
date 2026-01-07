import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bke")
export default class BkeController {
  @operation({
    summary: "Get Bke",
  })
  @get()
  static getBke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bke",
  })
  @post("{id}")
  static createBke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsk")
export default class LskController {
  @operation({
    summary: "Get Lsk",
  })
  @get()
  static getLsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsk",
  })
  @post("{id}")
  static createLsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

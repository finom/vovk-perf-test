import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msk")
export default class MskController {
  @operation({
    summary: "Get Msk",
  })
  @get()
  static getMsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msk",
  })
  @post("{id}")
  static createMsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

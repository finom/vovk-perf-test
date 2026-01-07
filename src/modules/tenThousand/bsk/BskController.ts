import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsk")
export default class BskController {
  @operation({
    summary: "Get Bsk",
  })
  @get()
  static getBsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsk",
  })
  @post("{id}")
  static createBsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

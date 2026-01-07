import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsa")
export default class BsaController {
  @operation({
    summary: "Get Bsa",
  })
  @get()
  static getBsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsa",
  })
  @post("{id}")
  static createBsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

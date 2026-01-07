import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccc")
export default class CccController {
  @operation({
    summary: "Get Ccc",
  })
  @get()
  static getCcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccc",
  })
  @post("{id}")
  static createCcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

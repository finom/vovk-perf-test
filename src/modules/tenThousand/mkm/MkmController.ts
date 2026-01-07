import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkm")
export default class MkmController {
  @operation({
    summary: "Get Mkm",
  })
  @get()
  static getMkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkm",
  })
  @post("{id}")
  static createMkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

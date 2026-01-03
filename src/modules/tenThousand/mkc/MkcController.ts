import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkcs")
export default class MkcController {
  @operation({
    summary: "Get Mkcs",
  })
  @get()
  static getMkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkc",
  })
  @post("{id}")
  static createMkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

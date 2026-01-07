import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkc")
export default class MkcController {
  @operation({
    summary: "Get Mkc",
  })
  @get()
  static getMkc = procedure({
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

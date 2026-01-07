import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkm")
export default class MkmController {
  @operation({
    summary: "Get Mkm",
  })
  @get()
  static getMkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkm",
  })
  @post("{id}")
  static createMkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkms")
export default class MkmController {
  @operation({
    summary: "Get Mkms",
  })
  @get()
  static getMkms = procedure({
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

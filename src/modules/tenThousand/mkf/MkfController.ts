import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkfs")
export default class MkfController {
  @operation({
    summary: "Get Mkfs",
  })
  @get()
  static getMkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkf",
  })
  @post("{id}")
  static createMkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

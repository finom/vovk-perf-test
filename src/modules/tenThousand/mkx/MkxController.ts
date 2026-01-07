import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkx")
export default class MkxController {
  @operation({
    summary: "Get Mkx",
  })
  @get()
  static getMkx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkx",
  })
  @post("{id}")
  static createMkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

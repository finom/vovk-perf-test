import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkxes")
export default class MkxController {
  @operation({
    summary: "Get Mkxes",
  })
  @get()
  static getMkxes = procedure({
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

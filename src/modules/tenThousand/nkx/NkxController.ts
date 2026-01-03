import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkxes")
export default class NkxController {
  @operation({
    summary: "Get Nkxes",
  })
  @get()
  static getNkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkx",
  })
  @post("{id}")
  static createNkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

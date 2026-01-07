import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkd")
export default class NkdController {
  @operation({
    summary: "Get Nkd",
  })
  @get()
  static getNkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkd",
  })
  @post("{id}")
  static createNkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

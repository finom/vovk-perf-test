import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkr")
export default class NkrController {
  @operation({
    summary: "Get Nkr",
  })
  @get()
  static getNkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkr",
  })
  @post("{id}")
  static createNkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

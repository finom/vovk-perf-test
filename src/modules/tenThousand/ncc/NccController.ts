import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncc")
export default class NccController {
  @operation({
    summary: "Get Ncc",
  })
  @get()
  static getNcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncc",
  })
  @post("{id}")
  static createNcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

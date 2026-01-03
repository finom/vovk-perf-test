import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pds")
export default class PdController {
  @operation({
    summary: "Get Pds",
  })
  @get()
  static getPds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pd",
  })
  @post("{id}")
  static createPd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

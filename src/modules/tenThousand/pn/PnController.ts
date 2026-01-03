import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pns")
export default class PnController {
  @operation({
    summary: "Get Pns",
  })
  @get()
  static getPns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pn",
  })
  @post("{id}")
  static createPn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

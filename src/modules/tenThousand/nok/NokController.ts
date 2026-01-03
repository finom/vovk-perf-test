import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noks")
export default class NokController {
  @operation({
    summary: "Get Noks",
  })
  @get()
  static getNoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nok",
  })
  @post("{id}")
  static createNok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naa")
export default class NaaController {
  @operation({
    summary: "Get Naa",
  })
  @get()
  static getNaa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Naa",
  })
  @post("{id}")
  static createNaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

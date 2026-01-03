import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noes")
export default class NoeController {
  @operation({
    summary: "Get Noes",
  })
  @get()
  static getNoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noe",
  })
  @post("{id}")
  static createNoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

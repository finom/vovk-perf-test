import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnas")
export default class NnaController {
  @operation({
    summary: "Get Nnas",
  })
  @get()
  static getNnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nna",
  })
  @post("{id}")
  static createNna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atus")
export default class AtuController {
  @operation({
    summary: "Get Atus",
  })
  @get()
  static getAtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atu",
  })
  @post("{id}")
  static createAtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

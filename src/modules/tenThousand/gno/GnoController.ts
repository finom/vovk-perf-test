import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnos")
export default class GnoController {
  @operation({
    summary: "Get Gnos",
  })
  @get()
  static getGnos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gno",
  })
  @post("{id}")
  static createGno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

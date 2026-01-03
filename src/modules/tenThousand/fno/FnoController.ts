import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnos")
export default class FnoController {
  @operation({
    summary: "Get Fnos",
  })
  @get()
  static getFnos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fno",
  })
  @post("{id}")
  static createFno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

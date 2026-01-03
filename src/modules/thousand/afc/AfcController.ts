import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afcs")
export default class AfcController {
  @operation({
    summary: "Get Afcs",
  })
  @get()
  static getAfcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afc",
  })
  @post("{id}")
  static createAfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

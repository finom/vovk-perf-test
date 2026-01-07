import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afc")
export default class AfcController {
  @operation({
    summary: "Get Afc",
  })
  @get()
  static getAfc = procedure({
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

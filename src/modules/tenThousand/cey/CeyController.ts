import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceys")
export default class CeyController {
  @operation({
    summary: "Get Ceys",
  })
  @get()
  static getCeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cey",
  })
  @post("{id}")
  static createCey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

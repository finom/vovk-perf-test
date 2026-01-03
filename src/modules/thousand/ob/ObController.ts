import { procedure, prefix, get, post, operation } from "vovk";

@prefix("obs")
export default class ObController {
  @operation({
    summary: "Get Obs",
  })
  @get()
  static getObs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ob",
  })
  @post("{id}")
  static createOb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

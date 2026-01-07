import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehu")
export default class EhuController {
  @operation({
    summary: "Get Ehu",
  })
  @get()
  static getEhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehu",
  })
  @post("{id}")
  static createEhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

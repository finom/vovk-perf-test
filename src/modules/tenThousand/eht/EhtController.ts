import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eht")
export default class EhtController {
  @operation({
    summary: "Get Eht",
  })
  @get()
  static getEht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eht",
  })
  @post("{id}")
  static createEht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

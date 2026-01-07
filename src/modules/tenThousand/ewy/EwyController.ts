import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewy")
export default class EwyController {
  @operation({
    summary: "Get Ewy",
  })
  @get()
  static getEwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewy",
  })
  @post("{id}")
  static createEwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

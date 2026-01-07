import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enu")
export default class EnuController {
  @operation({
    summary: "Get Enu",
  })
  @get()
  static getEnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enu",
  })
  @post("{id}")
  static createEnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

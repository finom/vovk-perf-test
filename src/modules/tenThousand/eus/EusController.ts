import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euses")
export default class EusController {
  @operation({
    summary: "Get Euses",
  })
  @get()
  static getEuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eus",
  })
  @post("{id}")
  static createEus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

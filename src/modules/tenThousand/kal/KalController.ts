import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kal")
export default class KalController {
  @operation({
    summary: "Get Kal",
  })
  @get()
  static getKal = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kal",
  })
  @post("{id}")
  static createKal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

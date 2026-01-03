import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgs")
export default class KgController {
  @operation({
    summary: "Get Kgs",
  })
  @get()
  static getKgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kg",
  })
  @post("{id}")
  static createKg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

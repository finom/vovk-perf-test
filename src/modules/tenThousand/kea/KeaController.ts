import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keas")
export default class KeaController {
  @operation({
    summary: "Get Keas",
  })
  @get()
  static getKeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kea",
  })
  @post("{id}")
  static createKea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

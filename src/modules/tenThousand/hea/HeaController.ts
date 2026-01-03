import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heas")
export default class HeaController {
  @operation({
    summary: "Get Heas",
  })
  @get()
  static getHeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hea",
  })
  @post("{id}")
  static createHea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

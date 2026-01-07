import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hea")
export default class HeaController {
  @operation({
    summary: "Get Hea",
  })
  @get()
  static getHea = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fup")
export default class FupController {
  @operation({
    summary: "Get Fup",
  })
  @get()
  static getFup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fup",
  })
  @post("{id}")
  static createFup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

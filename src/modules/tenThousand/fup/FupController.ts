import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fups")
export default class FupController {
  @operation({
    summary: "Get Fups",
  })
  @get()
  static getFups = procedure({
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

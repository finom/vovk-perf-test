import { procedure, prefix, get, post, operation } from "vovk";

@prefix("las")
export default class LasController {
  @operation({
    summary: "Get Las",
  })
  @get()
  static getLas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Las",
  })
  @post("{id}")
  static createLas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

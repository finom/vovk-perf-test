import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lje")
export default class LjeController {
  @operation({
    summary: "Get Lje",
  })
  @get()
  static getLje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lje",
  })
  @post("{id}")
  static createLje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

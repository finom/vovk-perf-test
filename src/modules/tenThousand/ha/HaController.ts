import { procedure, prefix, get, post, operation } from "vovk";

@prefix("has")
export default class HaController {
  @operation({
    summary: "Get Has",
  })
  @get()
  static getHas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ha",
  })
  @post("{id}")
  static createHa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

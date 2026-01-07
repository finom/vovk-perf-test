import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jza")
export default class JzaController {
  @operation({
    summary: "Get Jza",
  })
  @get()
  static getJza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jza",
  })
  @post("{id}")
  static createJza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

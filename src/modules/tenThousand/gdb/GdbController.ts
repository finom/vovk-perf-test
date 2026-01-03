import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdbs")
export default class GdbController {
  @operation({
    summary: "Get Gdbs",
  })
  @get()
  static getGdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdb",
  })
  @post("{id}")
  static createGdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

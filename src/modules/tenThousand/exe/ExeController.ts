import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exe")
export default class ExeController {
  @operation({
    summary: "Get Exe",
  })
  @get()
  static getExe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exe",
  })
  @post("{id}")
  static createExe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

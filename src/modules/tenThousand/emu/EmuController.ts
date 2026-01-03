import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emus")
export default class EmuController {
  @operation({
    summary: "Get Emus",
  })
  @get()
  static getEmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emu",
  })
  @post("{id}")
  static createEmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

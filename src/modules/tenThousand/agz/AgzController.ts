import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agzs")
export default class AgzController {
  @operation({
    summary: "Get Agzs",
  })
  @get()
  static getAgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agz",
  })
  @post("{id}")
  static createAgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

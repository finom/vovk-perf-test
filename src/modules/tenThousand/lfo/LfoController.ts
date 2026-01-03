import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfos")
export default class LfoController {
  @operation({
    summary: "Get Lfos",
  })
  @get()
  static getLfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfo",
  })
  @post("{id}")
  static createLfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

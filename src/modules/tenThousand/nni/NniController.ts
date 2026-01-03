import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnis")
export default class NniController {
  @operation({
    summary: "Get Nnis",
  })
  @get()
  static getNnis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nni",
  })
  @post("{id}")
  static createNni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

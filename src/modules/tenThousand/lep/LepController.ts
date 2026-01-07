import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lep")
export default class LepController {
  @operation({
    summary: "Get Lep",
  })
  @get()
  static getLep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lep",
  })
  @post("{id}")
  static createLep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

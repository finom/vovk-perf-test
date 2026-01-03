import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fims")
export default class FimController {
  @operation({
    summary: "Get Fims",
  })
  @get()
  static getFims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fim",
  })
  @post("{id}")
  static createFim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

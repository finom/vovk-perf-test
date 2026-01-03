import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjes")
export default class CjeController {
  @operation({
    summary: "Get Cjes",
  })
  @get()
  static getCjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cje",
  })
  @post("{id}")
  static createCje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

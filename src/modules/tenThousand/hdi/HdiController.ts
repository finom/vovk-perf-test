import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdis")
export default class HdiController {
  @operation({
    summary: "Get Hdis",
  })
  @get()
  static getHdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdi",
  })
  @post("{id}")
  static createHdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

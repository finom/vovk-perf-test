import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsis")
export default class HsiController {
  @operation({
    summary: "Get Hsis",
  })
  @get()
  static getHsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsi",
  })
  @post("{id}")
  static createHsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbc")
export default class GbcController {
  @operation({
    summary: "Get Gbc",
  })
  @get()
  static getGbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbc",
  })
  @post("{id}")
  static createGbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

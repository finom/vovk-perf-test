import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbcs")
export default class GbcController {
  @operation({
    summary: "Get Gbcs",
  })
  @get()
  static getGbcs = procedure({
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

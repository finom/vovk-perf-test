import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhds")
export default class JhdController {
  @operation({
    summary: "Get Jhds",
  })
  @get()
  static getJhds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhd",
  })
  @post("{id}")
  static createJhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhd")
export default class JhdController {
  @operation({
    summary: "Get Jhd",
  })
  @get()
  static getJhd = procedure({
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

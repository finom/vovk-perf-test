import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdds")
export default class JddController {
  @operation({
    summary: "Get Jdds",
  })
  @get()
  static getJdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdd",
  })
  @post("{id}")
  static createJdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

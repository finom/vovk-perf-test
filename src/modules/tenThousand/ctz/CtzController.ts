import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctzs")
export default class CtzController {
  @operation({
    summary: "Get Ctzs",
  })
  @get()
  static getCtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctz",
  })
  @post("{id}")
  static createCtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

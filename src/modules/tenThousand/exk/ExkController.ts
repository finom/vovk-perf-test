import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exks")
export default class ExkController {
  @operation({
    summary: "Get Exks",
  })
  @get()
  static getExks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exk",
  })
  @post("{id}")
  static createExk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

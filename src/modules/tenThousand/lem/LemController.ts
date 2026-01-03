import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lems")
export default class LemController {
  @operation({
    summary: "Get Lems",
  })
  @get()
  static getLems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lem",
  })
  @post("{id}")
  static createLem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

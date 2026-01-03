import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elgs")
export default class ElgController {
  @operation({
    summary: "Get Elgs",
  })
  @get()
  static getElgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elg",
  })
  @post("{id}")
  static createElg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

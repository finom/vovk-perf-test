import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elg")
export default class ElgController {
  @operation({
    summary: "Get Elg",
  })
  @get()
  static getElg = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elz")
export default class ElzController {
  @operation({
    summary: "Get Elz",
  })
  @get()
  static getElz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elz",
  })
  @post("{id}")
  static createElz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

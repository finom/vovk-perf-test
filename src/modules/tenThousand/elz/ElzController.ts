import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elzs")
export default class ElzController {
  @operation({
    summary: "Get Elzs",
  })
  @get()
  static getElzs = procedure({
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

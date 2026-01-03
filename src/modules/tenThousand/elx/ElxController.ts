import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elxes")
export default class ElxController {
  @operation({
    summary: "Get Elxes",
  })
  @get()
  static getElxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elx",
  })
  @post("{id}")
  static createElx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

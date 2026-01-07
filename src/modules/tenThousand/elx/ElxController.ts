import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elx")
export default class ElxController {
  @operation({
    summary: "Get Elx",
  })
  @get()
  static getElx = procedure({
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

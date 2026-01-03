import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhjs")
export default class JhjController {
  @operation({
    summary: "Get Jhjs",
  })
  @get()
  static getJhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhj",
  })
  @post("{id}")
  static createJhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

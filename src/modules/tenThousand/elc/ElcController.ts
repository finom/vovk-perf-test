import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elc")
export default class ElcController {
  @operation({
    summary: "Get Elc",
  })
  @get()
  static getElc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elc",
  })
  @post("{id}")
  static createElc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

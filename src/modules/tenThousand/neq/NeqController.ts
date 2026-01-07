import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neq")
export default class NeqController {
  @operation({
    summary: "Get Neq",
  })
  @get()
  static getNeq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neq",
  })
  @post("{id}")
  static createNeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

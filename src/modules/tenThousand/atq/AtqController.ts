import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atq")
export default class AtqController {
  @operation({
    summary: "Get Atq",
  })
  @get()
  static getAtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atq",
  })
  @post("{id}")
  static createAtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

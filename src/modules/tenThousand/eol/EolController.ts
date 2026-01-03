import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eols")
export default class EolController {
  @operation({
    summary: "Get Eols",
  })
  @get()
  static getEols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eol",
  })
  @post("{id}")
  static createEol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

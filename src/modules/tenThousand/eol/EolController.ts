import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eol")
export default class EolController {
  @operation({
    summary: "Get Eol",
  })
  @get()
  static getEol = procedure({
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

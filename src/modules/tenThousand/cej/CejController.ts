import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cejs")
export default class CejController {
  @operation({
    summary: "Get Cejs",
  })
  @get()
  static getCejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cej",
  })
  @post("{id}")
  static createCej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

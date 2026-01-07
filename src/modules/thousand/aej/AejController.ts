import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aej")
export default class AejController {
  @operation({
    summary: "Get Aej",
  })
  @get()
  static getAej = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aej",
  })
  @post("{id}")
  static createAej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

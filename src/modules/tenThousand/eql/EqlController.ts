import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eql")
export default class EqlController {
  @operation({
    summary: "Get Eql",
  })
  @get()
  static getEql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eql",
  })
  @post("{id}")
  static createEql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

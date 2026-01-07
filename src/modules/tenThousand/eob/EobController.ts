import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eob")
export default class EobController {
  @operation({
    summary: "Get Eob",
  })
  @get()
  static getEob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eob",
  })
  @post("{id}")
  static createEob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

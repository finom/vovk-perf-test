import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eli")
export default class EliController {
  @operation({
    summary: "Get Eli",
  })
  @get()
  static getEli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eli",
  })
  @post("{id}")
  static createEli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

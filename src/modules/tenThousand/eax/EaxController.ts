import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eax")
export default class EaxController {
  @operation({
    summary: "Get Eax",
  })
  @get()
  static getEax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eax",
  })
  @post("{id}")
  static createEax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

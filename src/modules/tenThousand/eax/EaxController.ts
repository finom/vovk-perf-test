import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaxes")
export default class EaxController {
  @operation({
    summary: "Get Eaxes",
  })
  @get()
  static getEaxes = procedure({
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

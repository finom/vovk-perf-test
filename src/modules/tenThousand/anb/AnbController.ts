import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anbs")
export default class AnbController {
  @operation({
    summary: "Get Anbs",
  })
  @get()
  static getAnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anb",
  })
  @post("{id}")
  static createAnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

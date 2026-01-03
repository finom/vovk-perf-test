import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enzs")
export default class EnzController {
  @operation({
    summary: "Get Enzs",
  })
  @get()
  static getEnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enz",
  })
  @post("{id}")
  static createEnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

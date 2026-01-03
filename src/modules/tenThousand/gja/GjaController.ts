import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjas")
export default class GjaController {
  @operation({
    summary: "Get Gjas",
  })
  @get()
  static getGjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gja",
  })
  @post("{id}")
  static createGja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

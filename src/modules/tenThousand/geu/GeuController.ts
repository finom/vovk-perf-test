import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geus")
export default class GeuController {
  @operation({
    summary: "Get Geus",
  })
  @get()
  static getGeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geu",
  })
  @post("{id}")
  static createGeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

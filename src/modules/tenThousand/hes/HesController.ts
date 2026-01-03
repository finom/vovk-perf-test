import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hes")
export default class HesController {
  @operation({
    summary: "Get Hes",
  })
  @get()
  static getHes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hes",
  })
  @post("{id}")
  static createHes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

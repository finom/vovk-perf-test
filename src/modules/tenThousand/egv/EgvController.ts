import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egv")
export default class EgvController {
  @operation({
    summary: "Get Egv",
  })
  @get()
  static getEgv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egv",
  })
  @post("{id}")
  static createEgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

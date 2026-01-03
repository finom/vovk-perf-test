import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efjs")
export default class EfjController {
  @operation({
    summary: "Get Efjs",
  })
  @get()
  static getEfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efj",
  })
  @post("{id}")
  static createEfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

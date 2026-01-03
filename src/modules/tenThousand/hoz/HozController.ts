import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hozs")
export default class HozController {
  @operation({
    summary: "Get Hozs",
  })
  @get()
  static getHozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoz",
  })
  @post("{id}")
  static createHoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

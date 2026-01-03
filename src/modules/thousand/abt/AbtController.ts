import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abts")
export default class AbtController {
  @operation({
    summary: "Get Abts",
  })
  @get()
  static getAbts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abt",
  })
  @post("{id}")
  static createAbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

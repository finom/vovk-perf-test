import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjs")
export default class KjsController {
  @operation({
    summary: "Get Kjs",
  })
  @get()
  static getKjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjs",
  })
  @post("{id}")
  static createKjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxn")
export default class GxnController {
  @operation({
    summary: "Get Gxn",
  })
  @get()
  static getGxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxn",
  })
  @post("{id}")
  static createGxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

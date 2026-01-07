import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxn")
export default class HxnController {
  @operation({
    summary: "Get Hxn",
  })
  @get()
  static getHxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxn",
  })
  @post("{id}")
  static createHxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

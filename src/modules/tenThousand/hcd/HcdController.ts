import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcd")
export default class HcdController {
  @operation({
    summary: "Get Hcd",
  })
  @get()
  static getHcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcd",
  })
  @post("{id}")
  static createHcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

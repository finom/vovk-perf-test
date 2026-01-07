import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zn")
export default class ZnController {
  @operation({
    summary: "Get Zn",
  })
  @get()
  static getZn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zn",
  })
  @post("{id}")
  static createZn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

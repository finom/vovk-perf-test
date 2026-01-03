import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcds")
export default class KcdController {
  @operation({
    summary: "Get Kcds",
  })
  @get()
  static getKcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcd",
  })
  @post("{id}")
  static createKcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

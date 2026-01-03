import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgds")
export default class KgdController {
  @operation({
    summary: "Get Kgds",
  })
  @get()
  static getKgds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgd",
  })
  @post("{id}")
  static createKgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

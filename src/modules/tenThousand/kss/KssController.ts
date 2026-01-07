import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kss")
export default class KssController {
  @operation({
    summary: "Get Kss",
  })
  @get()
  static getKss = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kss",
  })
  @post("{id}")
  static createKss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

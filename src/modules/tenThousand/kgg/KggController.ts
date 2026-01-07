import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgg")
export default class KggController {
  @operation({
    summary: "Get Kgg",
  })
  @get()
  static getKgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgg",
  })
  @post("{id}")
  static createKgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

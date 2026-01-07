import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgf")
export default class KgfController {
  @operation({
    summary: "Get Kgf",
  })
  @get()
  static getKgf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgf",
  })
  @post("{id}")
  static createKgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

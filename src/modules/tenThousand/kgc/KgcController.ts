import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgc")
export default class KgcController {
  @operation({
    summary: "Get Kgc",
  })
  @get()
  static getKgc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgc",
  })
  @post("{id}")
  static createKgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

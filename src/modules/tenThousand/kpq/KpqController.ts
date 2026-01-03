import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpqs")
export default class KpqController {
  @operation({
    summary: "Get Kpqs",
  })
  @get()
  static getKpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpq",
  })
  @post("{id}")
  static createKpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpbs")
export default class KpbController {
  @operation({
    summary: "Get Kpbs",
  })
  @get()
  static getKpbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpb",
  })
  @post("{id}")
  static createKpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

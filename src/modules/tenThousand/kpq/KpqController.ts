import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpq")
export default class KpqController {
  @operation({
    summary: "Get Kpq",
  })
  @get()
  static getKpq = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krts")
export default class KrtController {
  @operation({
    summary: "Get Krts",
  })
  @get()
  static getKrts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krt",
  })
  @post("{id}")
  static createKrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksr")
export default class KsrController {
  @operation({
    summary: "Get Ksr",
  })
  @get()
  static getKsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksr",
  })
  @post("{id}")
  static createKsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

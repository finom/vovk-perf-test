import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enfs")
export default class EnfController {
  @operation({
    summary: "Get Enfs",
  })
  @get()
  static getEnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enf",
  })
  @post("{id}")
  static createEnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

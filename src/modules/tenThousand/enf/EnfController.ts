import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enf")
export default class EnfController {
  @operation({
    summary: "Get Enf",
  })
  @get()
  static getEnf = procedure({
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

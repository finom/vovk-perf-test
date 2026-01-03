import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzis")
export default class BziController {
  @operation({
    summary: "Get Bzis",
  })
  @get()
  static getBzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzi",
  })
  @post("{id}")
  static createBzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

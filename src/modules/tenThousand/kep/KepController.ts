import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kep")
export default class KepController {
  @operation({
    summary: "Get Kep",
  })
  @get()
  static getKep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kep",
  })
  @post("{id}")
  static createKep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbe")
export default class KbeController {
  @operation({
    summary: "Get Kbe",
  })
  @get()
  static getKbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbe",
  })
  @post("{id}")
  static createKbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

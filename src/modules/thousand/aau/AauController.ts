import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaus")
export default class AauController {
  @operation({
    summary: "Get Aaus",
  })
  @get()
  static getAaus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aau",
  })
  @post("{id}")
  static createAau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

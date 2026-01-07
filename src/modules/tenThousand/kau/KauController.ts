import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kau")
export default class KauController {
  @operation({
    summary: "Get Kau",
  })
  @get()
  static getKau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kau",
  })
  @post("{id}")
  static createKau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

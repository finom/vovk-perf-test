import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kats")
export default class KatController {
  @operation({
    summary: "Get Kats",
  })
  @get()
  static getKats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kat",
  })
  @post("{id}")
  static createKat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

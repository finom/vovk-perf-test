import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuts")
export default class KutController {
  @operation({
    summary: "Get Kuts",
  })
  @get()
  static getKuts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kut",
  })
  @post("{id}")
  static createKut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

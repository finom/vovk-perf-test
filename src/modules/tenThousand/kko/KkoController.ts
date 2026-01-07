import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kko")
export default class KkoController {
  @operation({
    summary: "Get Kko",
  })
  @get()
  static getKko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kko",
  })
  @post("{id}")
  static createKko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

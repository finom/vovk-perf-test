import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czo")
export default class CzoController {
  @operation({
    summary: "Get Czo",
  })
  @get()
  static getCzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czo",
  })
  @post("{id}")
  static createCzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

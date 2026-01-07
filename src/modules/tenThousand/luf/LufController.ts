import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luf")
export default class LufController {
  @operation({
    summary: "Get Luf",
  })
  @get()
  static getLuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luf",
  })
  @post("{id}")
  static createLuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

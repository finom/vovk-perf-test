import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lej")
export default class LejController {
  @operation({
    summary: "Get Lej",
  })
  @get()
  static getLej = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lej",
  })
  @post("{id}")
  static createLej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

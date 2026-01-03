import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lejs")
export default class LejController {
  @operation({
    summary: "Get Lejs",
  })
  @get()
  static getLejs = procedure({
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

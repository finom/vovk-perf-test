import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyd")
export default class LydController {
  @operation({
    summary: "Get Lyd",
  })
  @get()
  static getLyd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyd",
  })
  @post("{id}")
  static createLyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

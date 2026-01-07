import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgu")
export default class LguController {
  @operation({
    summary: "Get Lgu",
  })
  @get()
  static getLgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgu",
  })
  @post("{id}")
  static createLgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

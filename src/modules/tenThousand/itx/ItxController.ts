import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itxes")
export default class ItxController {
  @operation({
    summary: "Get Itxes",
  })
  @get()
  static getItxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itx",
  })
  @post("{id}")
  static createItx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

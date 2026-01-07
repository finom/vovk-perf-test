import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmc")
export default class LmcController {
  @operation({
    summary: "Get Lmc",
  })
  @get()
  static getLmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmc",
  })
  @post("{id}")
  static createLmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

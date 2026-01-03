import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnhs")
export default class LnhController {
  @operation({
    summary: "Get Lnhs",
  })
  @get()
  static getLnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnh",
  })
  @post("{id}")
  static createLnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

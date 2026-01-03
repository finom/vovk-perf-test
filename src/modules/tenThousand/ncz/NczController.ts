import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nczs")
export default class NczController {
  @operation({
    summary: "Get Nczs",
  })
  @get()
  static getNczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncz",
  })
  @post("{id}")
  static createNcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

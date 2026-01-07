import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nge")
export default class NgeController {
  @operation({
    summary: "Get Nge",
  })
  @get()
  static getNge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nge",
  })
  @post("{id}")
  static createNge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

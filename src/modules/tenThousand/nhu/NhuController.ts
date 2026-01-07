import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhu")
export default class NhuController {
  @operation({
    summary: "Get Nhu",
  })
  @get()
  static getNhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhu",
  })
  @post("{id}")
  static createNhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

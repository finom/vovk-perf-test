import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndz")
export default class NdzController {
  @operation({
    summary: "Get Ndz",
  })
  @get()
  static getNdz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndz",
  })
  @post("{id}")
  static createNdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

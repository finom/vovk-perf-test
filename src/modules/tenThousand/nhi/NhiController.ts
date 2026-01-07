import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhi")
export default class NhiController {
  @operation({
    summary: "Get Nhi",
  })
  @get()
  static getNhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhi",
  })
  @post("{id}")
  static createNhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

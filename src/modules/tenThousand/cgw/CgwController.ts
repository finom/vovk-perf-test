import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgw")
export default class CgwController {
  @operation({
    summary: "Get Cgw",
  })
  @get()
  static getCgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgw",
  })
  @post("{id}")
  static createCgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

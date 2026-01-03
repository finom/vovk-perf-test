import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmcs")
export default class DmcController {
  @operation({
    summary: "Get Dmcs",
  })
  @get()
  static getDmcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmc",
  })
  @post("{id}")
  static createDmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

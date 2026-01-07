import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmc")
export default class BmcController {
  @operation({
    summary: "Get Bmc",
  })
  @get()
  static getBmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmc",
  })
  @post("{id}")
  static createBmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

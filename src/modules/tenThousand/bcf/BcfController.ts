import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcfs")
export default class BcfController {
  @operation({
    summary: "Get Bcfs",
  })
  @get()
  static getBcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcf",
  })
  @post("{id}")
  static createBcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

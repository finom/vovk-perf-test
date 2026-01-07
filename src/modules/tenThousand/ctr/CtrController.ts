import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctr")
export default class CtrController {
  @operation({
    summary: "Get Ctr",
  })
  @get()
  static getCtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctr",
  })
  @post("{id}")
  static createCtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

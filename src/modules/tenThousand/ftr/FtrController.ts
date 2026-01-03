import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftrs")
export default class FtrController {
  @operation({
    summary: "Get Ftrs",
  })
  @get()
  static getFtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftr",
  })
  @post("{id}")
  static createFtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

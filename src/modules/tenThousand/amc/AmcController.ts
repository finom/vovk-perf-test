import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amc")
export default class AmcController {
  @operation({
    summary: "Get Amc",
  })
  @get()
  static getAmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amc",
  })
  @post("{id}")
  static createAmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

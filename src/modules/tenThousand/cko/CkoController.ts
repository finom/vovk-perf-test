import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cko")
export default class CkoController {
  @operation({
    summary: "Get Cko",
  })
  @get()
  static getCko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cko",
  })
  @post("{id}")
  static createCko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

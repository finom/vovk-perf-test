import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqr")
export default class CqrController {
  @operation({
    summary: "Get Cqr",
  })
  @get()
  static getCqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqr",
  })
  @post("{id}")
  static createCqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

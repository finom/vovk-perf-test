import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqrs")
export default class CqrController {
  @operation({
    summary: "Get Cqrs",
  })
  @get()
  static getCqrs = procedure({
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

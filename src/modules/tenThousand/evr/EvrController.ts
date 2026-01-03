import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evrs")
export default class EvrController {
  @operation({
    summary: "Get Evrs",
  })
  @get()
  static getEvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evr",
  })
  @post("{id}")
  static createEvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

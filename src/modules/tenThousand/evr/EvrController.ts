import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evr")
export default class EvrController {
  @operation({
    summary: "Get Evr",
  })
  @get()
  static getEvr = procedure({
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

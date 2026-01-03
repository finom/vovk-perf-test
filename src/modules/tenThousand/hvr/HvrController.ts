import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvrs")
export default class HvrController {
  @operation({
    summary: "Get Hvrs",
  })
  @get()
  static getHvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvr",
  })
  @post("{id}")
  static createHvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

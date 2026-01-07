import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvr")
export default class HvrController {
  @operation({
    summary: "Get Hvr",
  })
  @get()
  static getHvr = procedure({
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

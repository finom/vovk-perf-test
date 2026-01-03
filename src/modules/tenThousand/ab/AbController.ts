import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abs")
export default class AbController {
  @operation({
    summary: "Get Abs",
  })
  @get()
  static getAbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ab",
  })
  @post("{id}")
  static createAb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

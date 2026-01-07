import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aon")
export default class AonController {
  @operation({
    summary: "Get Aon",
  })
  @get()
  static getAon = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aon",
  })
  @post("{id}")
  static createAon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

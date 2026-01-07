import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auh")
export default class AuhController {
  @operation({
    summary: "Get Auh",
  })
  @get()
  static getAuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auh",
  })
  @post("{id}")
  static createAuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

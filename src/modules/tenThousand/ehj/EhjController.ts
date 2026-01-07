import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehj")
export default class EhjController {
  @operation({
    summary: "Get Ehj",
  })
  @get()
  static getEhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehj",
  })
  @post("{id}")
  static createEhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

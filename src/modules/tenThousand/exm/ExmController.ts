import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exms")
export default class ExmController {
  @operation({
    summary: "Get Exms",
  })
  @get()
  static getExms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exm",
  })
  @post("{id}")
  static createExm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

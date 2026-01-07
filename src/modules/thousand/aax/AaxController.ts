import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aax")
export default class AaxController {
  @operation({
    summary: "Get Aax",
  })
  @get()
  static getAax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aax",
  })
  @post("{id}")
  static createAax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

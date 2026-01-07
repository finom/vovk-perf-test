import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aae")
export default class AaeController {
  @operation({
    summary: "Get Aae",
  })
  @get()
  static getAae = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aae",
  })
  @post("{id}")
  static createAae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

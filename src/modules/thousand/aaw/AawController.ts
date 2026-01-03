import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaws")
export default class AawController {
  @operation({
    summary: "Get Aaws",
  })
  @get()
  static getAaws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaw",
  })
  @post("{id}")
  static createAaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

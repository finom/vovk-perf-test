import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eem")
export default class EemController {
  @operation({
    summary: "Get Eem",
  })
  @get()
  static getEem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eem",
  })
  @post("{id}")
  static createEem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

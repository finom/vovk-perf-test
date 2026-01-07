import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aod")
export default class AodController {
  @operation({
    summary: "Get Aod",
  })
  @get()
  static getAod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aod",
  })
  @post("{id}")
  static createAod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

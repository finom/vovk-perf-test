import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ms")
export default class MsController {
  @operation({
    summary: "Get Ms",
  })
  @get()
  static getMs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ms",
  })
  @post("{id}")
  static createMs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edh")
export default class EdhController {
  @operation({
    summary: "Get Edh",
  })
  @get()
  static getEdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edh",
  })
  @post("{id}")
  static createEdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

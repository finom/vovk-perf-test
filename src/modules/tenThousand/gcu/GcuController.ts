import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcus")
export default class GcuController {
  @operation({
    summary: "Get Gcus",
  })
  @get()
  static getGcus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcu",
  })
  @post("{id}")
  static createGcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

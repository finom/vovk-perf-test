import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcu")
export default class GcuController {
  @operation({
    summary: "Get Gcu",
  })
  @get()
  static getGcu = procedure({
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

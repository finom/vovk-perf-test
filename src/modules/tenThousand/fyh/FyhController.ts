import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyhs")
export default class FyhController {
  @operation({
    summary: "Get Fyhs",
  })
  @get()
  static getFyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyh",
  })
  @post("{id}")
  static createFyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

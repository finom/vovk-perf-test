import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyus")
export default class FyuController {
  @operation({
    summary: "Get Fyus",
  })
  @get()
  static getFyus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyu",
  })
  @post("{id}")
  static createFyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

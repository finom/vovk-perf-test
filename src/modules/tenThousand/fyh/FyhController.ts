import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyh")
export default class FyhController {
  @operation({
    summary: "Get Fyh",
  })
  @get()
  static getFyh = procedure({
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

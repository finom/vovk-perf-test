import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyqs")
export default class FyqController {
  @operation({
    summary: "Get Fyqs",
  })
  @get()
  static getFyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyq",
  })
  @post("{id}")
  static createFyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

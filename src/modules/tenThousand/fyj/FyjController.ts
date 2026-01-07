import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyj")
export default class FyjController {
  @operation({
    summary: "Get Fyj",
  })
  @get()
  static getFyj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyj",
  })
  @post("{id}")
  static createFyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

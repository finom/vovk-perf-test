import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dws")
export default class DwsController {
  @operation({
    summary: "Get Dws",
  })
  @get()
  static getDws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dws",
  })
  @post("{id}")
  static createDws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

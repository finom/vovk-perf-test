import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dw")
export default class DwController {
  @operation({
    summary: "Get Dw",
  })
  @get()
  static getDw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dw",
  })
  @post("{id}")
  static createDw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

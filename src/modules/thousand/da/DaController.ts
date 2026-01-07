import { procedure, prefix, get, post, operation } from "vovk";

@prefix("da")
export default class DaController {
  @operation({
    summary: "Get Da",
  })
  @get()
  static getDa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Da",
  })
  @post("{id}")
  static createDa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

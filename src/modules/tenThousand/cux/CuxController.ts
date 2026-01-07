import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cux")
export default class CuxController {
  @operation({
    summary: "Get Cux",
  })
  @get()
  static getCux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cux",
  })
  @post("{id}")
  static createCux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

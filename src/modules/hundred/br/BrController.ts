import { procedure, prefix, get, post, operation } from "vovk";

@prefix("br")
export default class BrController {
  @operation({
    summary: "Get Br",
  })
  @get()
  static getBr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Br",
  })
  @post("{id}")
  static createBr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

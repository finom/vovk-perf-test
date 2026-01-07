import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brl")
export default class BrlController {
  @operation({
    summary: "Get Brl",
  })
  @get()
  static getBrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brl",
  })
  @post("{id}")
  static createBrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

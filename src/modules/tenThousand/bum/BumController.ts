import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bum")
export default class BumController {
  @operation({
    summary: "Get Bum",
  })
  @get()
  static getBum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bum",
  })
  @post("{id}")
  static createBum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

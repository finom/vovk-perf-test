import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bks")
export default class BksController {
  @operation({
    summary: "Get Bks",
  })
  @get()
  static getBks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bks",
  })
  @post("{id}")
  static createBks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

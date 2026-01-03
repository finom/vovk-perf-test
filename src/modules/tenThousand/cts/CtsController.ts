import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cts")
export default class CtsController {
  @operation({
    summary: "Get Cts",
  })
  @get()
  static getCts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cts",
  })
  @post("{id}")
  static createCts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

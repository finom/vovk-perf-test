import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpc")
export default class FpcController {
  @operation({
    summary: "Get Fpc",
  })
  @get()
  static getFpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpc",
  })
  @post("{id}")
  static createFpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

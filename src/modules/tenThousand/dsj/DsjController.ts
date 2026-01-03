import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsjs")
export default class DsjController {
  @operation({
    summary: "Get Dsjs",
  })
  @get()
  static getDsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsj",
  })
  @post("{id}")
  static createDsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

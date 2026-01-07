import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwc")
export default class CwcController {
  @operation({
    summary: "Get Cwc",
  })
  @get()
  static getCwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwc",
  })
  @post("{id}")
  static createCwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

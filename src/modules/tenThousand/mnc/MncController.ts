import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnc")
export default class MncController {
  @operation({
    summary: "Get Mnc",
  })
  @get()
  static getMnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnc",
  })
  @post("{id}")
  static createMnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

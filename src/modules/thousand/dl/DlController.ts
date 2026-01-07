import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dl")
export default class DlController {
  @operation({
    summary: "Get Dl",
  })
  @get()
  static getDl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dl",
  })
  @post("{id}")
  static createDl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnks")
export default class MnkController {
  @operation({
    summary: "Get Mnks",
  })
  @get()
  static getMnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnk",
  })
  @post("{id}")
  static createMnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

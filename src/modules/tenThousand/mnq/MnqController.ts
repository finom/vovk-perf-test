import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnqs")
export default class MnqController {
  @operation({
    summary: "Get Mnqs",
  })
  @get()
  static getMnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnq",
  })
  @post("{id}")
  static createMnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnxes")
export default class MnxController {
  @operation({
    summary: "Get Mnxes",
  })
  @get()
  static getMnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnx",
  })
  @post("{id}")
  static createMnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

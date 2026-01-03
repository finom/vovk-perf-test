import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbds")
export default class MbdController {
  @operation({
    summary: "Get Mbds",
  })
  @get()
  static getMbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbd",
  })
  @post("{id}")
  static createMbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

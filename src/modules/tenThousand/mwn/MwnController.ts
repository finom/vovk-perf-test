import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwns")
export default class MwnController {
  @operation({
    summary: "Get Mwns",
  })
  @get()
  static getMwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwn",
  })
  @post("{id}")
  static createMwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

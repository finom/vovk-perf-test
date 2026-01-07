import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwn")
export default class MwnController {
  @operation({
    summary: "Get Mwn",
  })
  @get()
  static getMwn = procedure({
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

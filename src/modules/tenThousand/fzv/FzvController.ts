import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzvs")
export default class FzvController {
  @operation({
    summary: "Get Fzvs",
  })
  @get()
  static getFzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzv",
  })
  @post("{id}")
  static createFzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

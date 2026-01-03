import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzvs")
export default class MzvController {
  @operation({
    summary: "Get Mzvs",
  })
  @get()
  static getMzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzv",
  })
  @post("{id}")
  static createMzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

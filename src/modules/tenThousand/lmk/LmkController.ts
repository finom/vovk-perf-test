import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmks")
export default class LmkController {
  @operation({
    summary: "Get Lmks",
  })
  @get()
  static getLmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmk",
  })
  @post("{id}")
  static createLmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

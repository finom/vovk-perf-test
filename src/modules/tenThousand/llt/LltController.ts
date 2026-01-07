import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llt")
export default class LltController {
  @operation({
    summary: "Get Llt",
  })
  @get()
  static getLlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llt",
  })
  @post("{id}")
  static createLlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

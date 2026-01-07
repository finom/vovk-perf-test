import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsk")
export default class LskController {
  @operation({
    summary: "Get Lsk",
  })
  @get()
  static getLsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsk",
  })
  @post("{id}")
  static createLsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

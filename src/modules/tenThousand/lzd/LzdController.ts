import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzds")
export default class LzdController {
  @operation({
    summary: "Get Lzds",
  })
  @get()
  static getLzds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzd",
  })
  @post("{id}")
  static createLzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

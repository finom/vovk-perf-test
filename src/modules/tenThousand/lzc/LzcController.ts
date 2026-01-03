import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzcs")
export default class LzcController {
  @operation({
    summary: "Get Lzcs",
  })
  @get()
  static getLzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzc",
  })
  @post("{id}")
  static createLzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

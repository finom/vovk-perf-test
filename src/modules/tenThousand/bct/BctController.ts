import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcts")
export default class BctController {
  @operation({
    summary: "Get Bcts",
  })
  @get()
  static getBcts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bct",
  })
  @post("{id}")
  static createBct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

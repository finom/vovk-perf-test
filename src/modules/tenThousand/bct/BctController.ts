import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bct")
export default class BctController {
  @operation({
    summary: "Get Bct",
  })
  @get()
  static getBct = procedure({
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

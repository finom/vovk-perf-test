import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsn")
export default class FsnController {
  @operation({
    summary: "Get Fsn",
  })
  @get()
  static getFsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsn",
  })
  @post("{id}")
  static createFsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

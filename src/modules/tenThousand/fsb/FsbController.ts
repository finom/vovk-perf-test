import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsbs")
export default class FsbController {
  @operation({
    summary: "Get Fsbs",
  })
  @get()
  static getFsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsb",
  })
  @post("{id}")
  static createFsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

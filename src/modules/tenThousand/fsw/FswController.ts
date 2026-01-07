import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsw")
export default class FswController {
  @operation({
    summary: "Get Fsw",
  })
  @get()
  static getFsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsw",
  })
  @post("{id}")
  static createFsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

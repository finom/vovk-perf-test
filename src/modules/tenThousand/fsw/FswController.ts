import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsws")
export default class FswController {
  @operation({
    summary: "Get Fsws",
  })
  @get()
  static getFsws = procedure({
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

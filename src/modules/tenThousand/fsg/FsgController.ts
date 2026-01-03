import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsgs")
export default class FsgController {
  @operation({
    summary: "Get Fsgs",
  })
  @get()
  static getFsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsg",
  })
  @post("{id}")
  static createFsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

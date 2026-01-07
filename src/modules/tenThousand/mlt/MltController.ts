import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlt")
export default class MltController {
  @operation({
    summary: "Get Mlt",
  })
  @get()
  static getMlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlt",
  })
  @post("{id}")
  static createMlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

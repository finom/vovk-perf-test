import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjgs")
export default class MjgController {
  @operation({
    summary: "Get Mjgs",
  })
  @get()
  static getMjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjg",
  })
  @post("{id}")
  static createMjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjg")
export default class MjgController {
  @operation({
    summary: "Get Mjg",
  })
  @get()
  static getMjg = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sh")
export default class ShController {
  @operation({
    summary: "Get Sh",
  })
  @get()
  static getSh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sh",
  })
  @post("{id}")
  static createSh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

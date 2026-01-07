import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cc")
export default class CcController {
  @operation({
    summary: "Get Cc",
  })
  @get()
  static getCc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cc",
  })
  @post("{id}")
  static createCc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsn")
export default class HsnController {
  @operation({
    summary: "Get Hsn",
  })
  @get()
  static getHsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsn",
  })
  @post("{id}")
  static createHsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

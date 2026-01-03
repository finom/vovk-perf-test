import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bccs")
export default class BccController {
  @operation({
    summary: "Get Bccs",
  })
  @get()
  static getBccs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcc",
  })
  @post("{id}")
  static createBcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

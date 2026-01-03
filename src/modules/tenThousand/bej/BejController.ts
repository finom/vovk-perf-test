import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bejs")
export default class BejController {
  @operation({
    summary: "Get Bejs",
  })
  @get()
  static getBejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bej",
  })
  @post("{id}")
  static createBej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

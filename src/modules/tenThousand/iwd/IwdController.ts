import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwds")
export default class IwdController {
  @operation({
    summary: "Get Iwds",
  })
  @get()
  static getIwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwd",
  })
  @post("{id}")
  static createIwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

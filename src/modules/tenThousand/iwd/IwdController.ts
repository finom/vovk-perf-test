import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwd")
export default class IwdController {
  @operation({
    summary: "Get Iwd",
  })
  @get()
  static getIwd = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwd")
export default class LwdController {
  @operation({
    summary: "Get Lwd",
  })
  @get()
  static getLwd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwd",
  })
  @post("{id}")
  static createLwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

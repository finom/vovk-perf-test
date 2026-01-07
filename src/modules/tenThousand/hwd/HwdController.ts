import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwd")
export default class HwdController {
  @operation({
    summary: "Get Hwd",
  })
  @get()
  static getHwd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwd",
  })
  @post("{id}")
  static createHwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

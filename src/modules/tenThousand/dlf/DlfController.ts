import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlf")
export default class DlfController {
  @operation({
    summary: "Get Dlf",
  })
  @get()
  static getDlf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlf",
  })
  @post("{id}")
  static createDlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

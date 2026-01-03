import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiks")
export default class FikController {
  @operation({
    summary: "Get Fiks",
  })
  @get()
  static getFiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fik",
  })
  @post("{id}")
  static createFik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

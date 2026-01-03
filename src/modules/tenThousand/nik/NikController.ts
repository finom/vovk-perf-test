import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niks")
export default class NikController {
  @operation({
    summary: "Get Niks",
  })
  @get()
  static getNiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nik",
  })
  @post("{id}")
  static createNik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

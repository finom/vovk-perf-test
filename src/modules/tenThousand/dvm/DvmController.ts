import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvms")
export default class DvmController {
  @operation({
    summary: "Get Dvms",
  })
  @get()
  static getDvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvm",
  })
  @post("{id}")
  static createDvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

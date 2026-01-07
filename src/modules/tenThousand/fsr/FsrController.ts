import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsr")
export default class FsrController {
  @operation({
    summary: "Get Fsr",
  })
  @get()
  static getFsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsr",
  })
  @post("{id}")
  static createFsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

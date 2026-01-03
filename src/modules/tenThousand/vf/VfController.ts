import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vfs")
export default class VfController {
  @operation({
    summary: "Get Vfs",
  })
  @get()
  static getVfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vf",
  })
  @post("{id}")
  static createVf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

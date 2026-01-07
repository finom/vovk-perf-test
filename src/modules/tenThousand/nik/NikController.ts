import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nik")
export default class NikController {
  @operation({
    summary: "Get Nik",
  })
  @get()
  static getNik = procedure({
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

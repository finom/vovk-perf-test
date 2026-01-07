import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cek")
export default class CekController {
  @operation({
    summary: "Get Cek",
  })
  @get()
  static getCek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cek",
  })
  @post("{id}")
  static createCek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

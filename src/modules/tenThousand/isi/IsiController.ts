import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isi")
export default class IsiController {
  @operation({
    summary: "Get Isi",
  })
  @get()
  static getIsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isi",
  })
  @post("{id}")
  static createIsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

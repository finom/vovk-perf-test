import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isis")
export default class IsiController {
  @operation({
    summary: "Get Isis",
  })
  @get()
  static getIsis = procedure({
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

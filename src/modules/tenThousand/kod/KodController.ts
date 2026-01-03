import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kods")
export default class KodController {
  @operation({
    summary: "Get Kods",
  })
  @get()
  static getKods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kod",
  })
  @post("{id}")
  static createKod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kir")
export default class KirController {
  @operation({
    summary: "Get Kir",
  })
  @get()
  static getKir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kir",
  })
  @post("{id}")
  static createKir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

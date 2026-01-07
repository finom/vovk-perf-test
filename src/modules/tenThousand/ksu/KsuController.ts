import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksu")
export default class KsuController {
  @operation({
    summary: "Get Ksu",
  })
  @get()
  static getKsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksu",
  })
  @post("{id}")
  static createKsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

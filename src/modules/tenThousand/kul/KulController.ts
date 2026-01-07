import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kul")
export default class KulController {
  @operation({
    summary: "Get Kul",
  })
  @get()
  static getKul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kul",
  })
  @post("{id}")
  static createKul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

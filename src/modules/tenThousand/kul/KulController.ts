import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuls")
export default class KulController {
  @operation({
    summary: "Get Kuls",
  })
  @get()
  static getKuls = procedure({
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

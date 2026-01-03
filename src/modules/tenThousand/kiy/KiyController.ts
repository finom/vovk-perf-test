import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiys")
export default class KiyController {
  @operation({
    summary: "Get Kiys",
  })
  @get()
  static getKiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiy",
  })
  @post("{id}")
  static createKiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

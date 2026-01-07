import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbo")
export default class KboController {
  @operation({
    summary: "Get Kbo",
  })
  @get()
  static getKbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbo",
  })
  @post("{id}")
  static createKbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

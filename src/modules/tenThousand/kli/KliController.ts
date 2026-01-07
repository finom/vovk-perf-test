import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kli")
export default class KliController {
  @operation({
    summary: "Get Kli",
  })
  @get()
  static getKli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kli",
  })
  @post("{id}")
  static createKli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

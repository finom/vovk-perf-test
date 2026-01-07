import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzo")
export default class KzoController {
  @operation({
    summary: "Get Kzo",
  })
  @get()
  static getKzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzo",
  })
  @post("{id}")
  static createKzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzos")
export default class KzoController {
  @operation({
    summary: "Get Kzos",
  })
  @get()
  static getKzos = procedure({
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

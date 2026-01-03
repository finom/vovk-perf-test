import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avts")
export default class AvtController {
  @operation({
    summary: "Get Avts",
  })
  @get()
  static getAvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avt",
  })
  @post("{id}")
  static createAvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

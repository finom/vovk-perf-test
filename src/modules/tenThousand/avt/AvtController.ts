import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avt")
export default class AvtController {
  @operation({
    summary: "Get Avt",
  })
  @get()
  static getAvt = procedure({
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

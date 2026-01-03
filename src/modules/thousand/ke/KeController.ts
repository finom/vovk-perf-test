import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kes")
export default class KeController {
  @operation({
    summary: "Get Kes",
  })
  @get()
  static getKes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ke",
  })
  @post("{id}")
  static createKe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

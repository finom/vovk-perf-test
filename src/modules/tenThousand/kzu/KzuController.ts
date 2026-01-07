import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzu")
export default class KzuController {
  @operation({
    summary: "Get Kzu",
  })
  @get()
  static getKzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzu",
  })
  @post("{id}")
  static createKzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

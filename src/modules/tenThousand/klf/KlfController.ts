import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klf")
export default class KlfController {
  @operation({
    summary: "Get Klf",
  })
  @get()
  static getKlf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klf",
  })
  @post("{id}")
  static createKlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

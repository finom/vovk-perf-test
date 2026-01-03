import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kghs")
export default class KghController {
  @operation({
    summary: "Get Kghs",
  })
  @get()
  static getKghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgh",
  })
  @post("{id}")
  static createKgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

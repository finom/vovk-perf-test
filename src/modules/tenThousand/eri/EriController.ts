import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eris")
export default class EriController {
  @operation({
    summary: "Get Eris",
  })
  @get()
  static getEris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eri",
  })
  @post("{id}")
  static createEri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

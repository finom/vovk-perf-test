import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbl")
export default class KblController {
  @operation({
    summary: "Get Kbl",
  })
  @get()
  static getKbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbl",
  })
  @post("{id}")
  static createKbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

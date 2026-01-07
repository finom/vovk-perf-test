import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaa")
export default class EaaController {
  @operation({
    summary: "Get Eaa",
  })
  @get()
  static getEaa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaa",
  })
  @post("{id}")
  static createEaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

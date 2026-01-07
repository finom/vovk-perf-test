import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izo")
export default class IzoController {
  @operation({
    summary: "Get Izo",
  })
  @get()
  static getIzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izo",
  })
  @post("{id}")
  static createIzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieos")
export default class IeoController {
  @operation({
    summary: "Get Ieos",
  })
  @get()
  static getIeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ieo",
  })
  @post("{id}")
  static createIeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

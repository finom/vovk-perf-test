import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izv")
export default class IzvController {
  @operation({
    summary: "Get Izv",
  })
  @get()
  static getIzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izv",
  })
  @post("{id}")
  static createIzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

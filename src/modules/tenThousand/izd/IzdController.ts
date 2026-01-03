import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izds")
export default class IzdController {
  @operation({
    summary: "Get Izds",
  })
  @get()
  static getIzds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izd",
  })
  @post("{id}")
  static createIzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

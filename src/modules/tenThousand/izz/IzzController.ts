import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izz")
export default class IzzController {
  @operation({
    summary: "Get Izz",
  })
  @get()
  static getIzz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izz",
  })
  @post("{id}")
  static createIzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

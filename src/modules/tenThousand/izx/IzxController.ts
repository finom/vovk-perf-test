import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izxes")
export default class IzxController {
  @operation({
    summary: "Get Izxes",
  })
  @get()
  static getIzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izx",
  })
  @post("{id}")
  static createIzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

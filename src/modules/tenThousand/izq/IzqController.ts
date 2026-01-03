import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izqs")
export default class IzqController {
  @operation({
    summary: "Get Izqs",
  })
  @get()
  static getIzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izq",
  })
  @post("{id}")
  static createIzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

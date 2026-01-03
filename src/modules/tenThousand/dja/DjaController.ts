import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djas")
export default class DjaController {
  @operation({
    summary: "Get Djas",
  })
  @get()
  static getDjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dja",
  })
  @post("{id}")
  static createDja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

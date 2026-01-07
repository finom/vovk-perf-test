import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dja")
export default class DjaController {
  @operation({
    summary: "Get Dja",
  })
  @get()
  static getDja = procedure({
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

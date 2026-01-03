import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npes")
export default class NpeController {
  @operation({
    summary: "Get Npes",
  })
  @get()
  static getNpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npe",
  })
  @post("{id}")
  static createNpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

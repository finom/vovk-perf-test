import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npe")
export default class NpeController {
  @operation({
    summary: "Get Npe",
  })
  @get()
  static getNpe = procedure({
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

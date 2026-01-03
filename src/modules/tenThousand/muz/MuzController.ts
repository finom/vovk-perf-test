import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muzs")
export default class MuzController {
  @operation({
    summary: "Get Muzs",
  })
  @get()
  static getMuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muz",
  })
  @post("{id}")
  static createMuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

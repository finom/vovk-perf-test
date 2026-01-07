import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faf")
export default class FafController {
  @operation({
    summary: "Get Faf",
  })
  @get()
  static getFaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faf",
  })
  @post("{id}")
  static createFaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

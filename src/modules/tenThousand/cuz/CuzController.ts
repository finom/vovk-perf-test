import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuzs")
export default class CuzController {
  @operation({
    summary: "Get Cuzs",
  })
  @get()
  static getCuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuz",
  })
  @post("{id}")
  static createCuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

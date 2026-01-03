import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayus")
export default class AyuController {
  @operation({
    summary: "Get Ayus",
  })
  @get()
  static getAyus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayu",
  })
  @post("{id}")
  static createAyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

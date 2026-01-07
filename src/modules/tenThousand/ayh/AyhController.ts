import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayh")
export default class AyhController {
  @operation({
    summary: "Get Ayh",
  })
  @get()
  static getAyh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayh",
  })
  @post("{id}")
  static createAyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

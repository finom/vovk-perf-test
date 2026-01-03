import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjus")
export default class HjuController {
  @operation({
    summary: "Get Hjus",
  })
  @get()
  static getHjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hju",
  })
  @post("{id}")
  static createHju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

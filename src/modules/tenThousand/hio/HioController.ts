import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hio")
export default class HioController {
  @operation({
    summary: "Get Hio",
  })
  @get()
  static getHio = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hio",
  })
  @post("{id}")
  static createHio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

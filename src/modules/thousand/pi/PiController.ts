import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pis")
export default class PiController {
  @operation({
    summary: "Get Pis",
  })
  @get()
  static getPis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pi",
  })
  @post("{id}")
  static createPi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

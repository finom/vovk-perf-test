import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahms")
export default class AhmController {
  @operation({
    summary: "Get Ahms",
  })
  @get()
  static getAhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahm",
  })
  @post("{id}")
  static createAhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

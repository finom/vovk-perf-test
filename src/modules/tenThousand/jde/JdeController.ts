import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdes")
export default class JdeController {
  @operation({
    summary: "Get Jdes",
  })
  @get()
  static getJdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jde",
  })
  @post("{id}")
  static createJde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

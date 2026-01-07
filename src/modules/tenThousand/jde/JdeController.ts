import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jde")
export default class JdeController {
  @operation({
    summary: "Get Jde",
  })
  @get()
  static getJde = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhhs")
export default class JhhController {
  @operation({
    summary: "Get Jhhs",
  })
  @get()
  static getJhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhh",
  })
  @post("{id}")
  static createJhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

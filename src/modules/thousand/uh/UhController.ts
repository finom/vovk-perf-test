import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uhs")
export default class UhController {
  @operation({
    summary: "Get Uhs",
  })
  @get()
  static getUhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uh",
  })
  @post("{id}")
  static createUh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

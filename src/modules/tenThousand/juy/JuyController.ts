import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juys")
export default class JuyController {
  @operation({
    summary: "Get Juys",
  })
  @get()
  static getJuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juy",
  })
  @post("{id}")
  static createJuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

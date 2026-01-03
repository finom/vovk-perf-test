import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijos")
export default class IjoController {
  @operation({
    summary: "Get Ijos",
  })
  @get()
  static getIjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijo",
  })
  @post("{id}")
  static createIjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

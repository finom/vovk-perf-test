import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhos")
export default class HhoController {
  @operation({
    summary: "Get Hhos",
  })
  @get()
  static getHhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hho",
  })
  @post("{id}")
  static createHho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

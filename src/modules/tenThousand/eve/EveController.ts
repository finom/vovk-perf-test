import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eves")
export default class EveController {
  @operation({
    summary: "Get Eves",
  })
  @get()
  static getEves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eve",
  })
  @post("{id}")
  static createEve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

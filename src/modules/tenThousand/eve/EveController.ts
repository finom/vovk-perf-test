import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eve")
export default class EveController {
  @operation({
    summary: "Get Eve",
  })
  @get()
  static getEve = procedure({
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

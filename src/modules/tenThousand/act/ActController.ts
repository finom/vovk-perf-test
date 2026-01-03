import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acts")
export default class ActController {
  @operation({
    summary: "Get Acts",
  })
  @get()
  static getActs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Act",
  })
  @post("{id}")
  static createAct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

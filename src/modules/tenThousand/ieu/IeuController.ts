import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieu")
export default class IeuController {
  @operation({
    summary: "Get Ieu",
  })
  @get()
  static getIeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ieu",
  })
  @post("{id}")
  static createIeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

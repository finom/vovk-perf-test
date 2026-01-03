import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhls")
export default class HhlController {
  @operation({
    summary: "Get Hhls",
  })
  @get()
  static getHhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhl",
  })
  @post("{id}")
  static createHhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

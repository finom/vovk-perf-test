import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhl")
export default class HhlController {
  @operation({
    summary: "Get Hhl",
  })
  @get()
  static getHhl = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjw")
export default class HjwController {
  @operation({
    summary: "Get Hjw",
  })
  @get()
  static getHjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjw",
  })
  @post("{id}")
  static createHjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

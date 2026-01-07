import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heb")
export default class HebController {
  @operation({
    summary: "Get Heb",
  })
  @get()
  static getHeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heb",
  })
  @post("{id}")
  static createHeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

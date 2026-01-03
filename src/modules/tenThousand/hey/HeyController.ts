import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heys")
export default class HeyController {
  @operation({
    summary: "Get Heys",
  })
  @get()
  static getHeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hey",
  })
  @post("{id}")
  static createHey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

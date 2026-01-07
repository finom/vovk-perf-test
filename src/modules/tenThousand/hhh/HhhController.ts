import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhh")
export default class HhhController {
  @operation({
    summary: "Get Hhh",
  })
  @get()
  static getHhh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhh",
  })
  @post("{id}")
  static createHhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

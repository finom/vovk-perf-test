import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbrs")
export default class HbrController {
  @operation({
    summary: "Get Hbrs",
  })
  @get()
  static getHbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbr",
  })
  @post("{id}")
  static createHbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

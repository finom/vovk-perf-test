import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hee")
export default class HeeController {
  @operation({
    summary: "Get Hee",
  })
  @get()
  static getHee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hee",
  })
  @post("{id}")
  static createHee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

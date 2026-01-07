import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbq")
export default class HbqController {
  @operation({
    summary: "Get Hbq",
  })
  @get()
  static getHbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbq",
  })
  @post("{id}")
  static createHbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

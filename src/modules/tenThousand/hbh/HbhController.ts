import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbhs")
export default class HbhController {
  @operation({
    summary: "Get Hbhs",
  })
  @get()
  static getHbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbh",
  })
  @post("{id}")
  static createHbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

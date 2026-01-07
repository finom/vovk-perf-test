import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbh")
export default class HbhController {
  @operation({
    summary: "Get Hbh",
  })
  @get()
  static getHbh = procedure({
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

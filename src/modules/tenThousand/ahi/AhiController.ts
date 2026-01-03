import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahis")
export default class AhiController {
  @operation({
    summary: "Get Ahis",
  })
  @get()
  static getAhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahi",
  })
  @post("{id}")
  static createAhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

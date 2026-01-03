import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzis")
export default class HziController {
  @operation({
    summary: "Get Hzis",
  })
  @get()
  static getHzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzi",
  })
  @post("{id}")
  static createHzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahp")
export default class AhpController {
  @operation({
    summary: "Get Ahp",
  })
  @get()
  static getAhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahp",
  })
  @post("{id}")
  static createAhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahps")
export default class AhpController {
  @operation({
    summary: "Get Ahps",
  })
  @get()
  static getAhps = procedure({
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

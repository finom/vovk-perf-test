import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahg")
export default class AhgController {
  @operation({
    summary: "Get Ahg",
  })
  @get()
  static getAhg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahg",
  })
  @post("{id}")
  static createAhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

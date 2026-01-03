import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahgs")
export default class AhgController {
  @operation({
    summary: "Get Ahgs",
  })
  @get()
  static getAhgs = procedure({
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

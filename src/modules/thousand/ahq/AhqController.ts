import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahq")
export default class AhqController {
  @operation({
    summary: "Get Ahq",
  })
  @get()
  static getAhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahq",
  })
  @post("{id}")
  static createAhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

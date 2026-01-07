import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyq")
export default class EyqController {
  @operation({
    summary: "Get Eyq",
  })
  @get()
  static getEyq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyq",
  })
  @post("{id}")
  static createEyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

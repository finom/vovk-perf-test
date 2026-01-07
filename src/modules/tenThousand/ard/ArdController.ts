import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ard")
export default class ArdController {
  @operation({
    summary: "Get Ard",
  })
  @get()
  static getArd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ard",
  })
  @post("{id}")
  static createArd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

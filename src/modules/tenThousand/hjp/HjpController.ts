import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjp")
export default class HjpController {
  @operation({
    summary: "Get Hjp",
  })
  @get()
  static getHjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjp",
  })
  @post("{id}")
  static createHjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjies")
export default class HjyController {
  @operation({
    summary: "Get Hjies",
  })
  @get()
  static getHjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjy",
  })
  @post("{id}")
  static createHjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

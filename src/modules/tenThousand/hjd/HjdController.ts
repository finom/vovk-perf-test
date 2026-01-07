import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjd")
export default class HjdController {
  @operation({
    summary: "Get Hjd",
  })
  @get()
  static getHjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjd",
  })
  @post("{id}")
  static createHjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

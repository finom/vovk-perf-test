import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haw")
export default class HawController {
  @operation({
    summary: "Get Haw",
  })
  @get()
  static getHaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haw",
  })
  @post("{id}")
  static createHaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

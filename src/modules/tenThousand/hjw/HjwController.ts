import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjws")
export default class HjwController {
  @operation({
    summary: "Get Hjws",
  })
  @get()
  static getHjws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjw",
  })
  @post("{id}")
  static createHjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

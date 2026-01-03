import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hois")
export default class HoiController {
  @operation({
    summary: "Get Hois",
  })
  @get()
  static getHois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoi",
  })
  @post("{id}")
  static createHoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

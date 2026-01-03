import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoqs")
export default class HoqController {
  @operation({
    summary: "Get Hoqs",
  })
  @get()
  static getHoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoq",
  })
  @post("{id}")
  static createHoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hax")
export default class HaxController {
  @operation({
    summary: "Get Hax",
  })
  @get()
  static getHax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hax",
  })
  @post("{id}")
  static createHax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

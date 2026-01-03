import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mavs")
export default class MavController {
  @operation({
    summary: "Get Mavs",
  })
  @get()
  static getMavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mav",
  })
  @post("{id}")
  static createMav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

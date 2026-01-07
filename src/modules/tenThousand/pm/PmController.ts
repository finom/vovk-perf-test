import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pm")
export default class PmController {
  @operation({
    summary: "Get Pm",
  })
  @get()
  static getPm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pm",
  })
  @post("{id}")
  static createPm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

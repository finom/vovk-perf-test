import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpds")
export default class LpdController {
  @operation({
    summary: "Get Lpds",
  })
  @get()
  static getLpds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpd",
  })
  @post("{id}")
  static createLpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epd")
export default class EpdController {
  @operation({
    summary: "Get Epd",
  })
  @get()
  static getEpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epd",
  })
  @post("{id}")
  static createEpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

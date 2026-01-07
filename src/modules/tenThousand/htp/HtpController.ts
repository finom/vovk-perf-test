import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htp")
export default class HtpController {
  @operation({
    summary: "Get Htp",
  })
  @get()
  static getHtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htp",
  })
  @post("{id}")
  static createHtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

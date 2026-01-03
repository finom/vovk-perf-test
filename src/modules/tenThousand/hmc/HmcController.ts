import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmcs")
export default class HmcController {
  @operation({
    summary: "Get Hmcs",
  })
  @get()
  static getHmcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmc",
  })
  @post("{id}")
  static createHmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

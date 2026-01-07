import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmc")
export default class HmcController {
  @operation({
    summary: "Get Hmc",
  })
  @get()
  static getHmc = procedure({
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

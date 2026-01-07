import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hju")
export default class HjuController {
  @operation({
    summary: "Get Hju",
  })
  @get()
  static getHju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hju",
  })
  @post("{id}")
  static createHju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

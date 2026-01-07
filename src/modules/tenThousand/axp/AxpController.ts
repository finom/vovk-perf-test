import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axp")
export default class AxpController {
  @operation({
    summary: "Get Axp",
  })
  @get()
  static getAxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axp",
  })
  @post("{id}")
  static createAxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

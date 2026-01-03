import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axps")
export default class AxpController {
  @operation({
    summary: "Get Axps",
  })
  @get()
  static getAxps = procedure({
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

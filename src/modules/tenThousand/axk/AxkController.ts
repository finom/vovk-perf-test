import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axk")
export default class AxkController {
  @operation({
    summary: "Get Axk",
  })
  @get()
  static getAxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axk",
  })
  @post("{id}")
  static createAxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

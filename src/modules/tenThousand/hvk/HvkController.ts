import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvk")
export default class HvkController {
  @operation({
    summary: "Get Hvk",
  })
  @get()
  static getHvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvk",
  })
  @post("{id}")
  static createHvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

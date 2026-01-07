import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivk")
export default class IvkController {
  @operation({
    summary: "Get Ivk",
  })
  @get()
  static getIvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivk",
  })
  @post("{id}")
  static createIvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

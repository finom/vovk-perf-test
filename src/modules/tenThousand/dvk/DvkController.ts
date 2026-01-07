import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvk")
export default class DvkController {
  @operation({
    summary: "Get Dvk",
  })
  @get()
  static getDvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvk",
  })
  @post("{id}")
  static createDvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

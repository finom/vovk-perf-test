import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgk")
export default class DgkController {
  @operation({
    summary: "Get Dgk",
  })
  @get()
  static getDgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgk",
  })
  @post("{id}")
  static createDgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

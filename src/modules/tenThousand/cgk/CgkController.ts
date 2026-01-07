import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgk")
export default class CgkController {
  @operation({
    summary: "Get Cgk",
  })
  @get()
  static getCgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgk",
  })
  @post("{id}")
  static createCgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

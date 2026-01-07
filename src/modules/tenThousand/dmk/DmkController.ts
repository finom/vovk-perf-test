import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmk")
export default class DmkController {
  @operation({
    summary: "Get Dmk",
  })
  @get()
  static getDmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmk",
  })
  @post("{id}")
  static createDmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

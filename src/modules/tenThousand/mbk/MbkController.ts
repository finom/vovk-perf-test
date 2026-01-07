import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbk")
export default class MbkController {
  @operation({
    summary: "Get Mbk",
  })
  @get()
  static getMbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbk",
  })
  @post("{id}")
  static createMbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

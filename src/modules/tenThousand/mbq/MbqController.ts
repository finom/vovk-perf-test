import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbq")
export default class MbqController {
  @operation({
    summary: "Get Mbq",
  })
  @get()
  static getMbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbq",
  })
  @post("{id}")
  static createMbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

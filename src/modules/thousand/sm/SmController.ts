import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sm")
export default class SmController {
  @operation({
    summary: "Get Sm",
  })
  @get()
  static getSm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sm",
  })
  @post("{id}")
  static createSm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

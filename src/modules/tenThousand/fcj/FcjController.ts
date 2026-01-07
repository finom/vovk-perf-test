import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcj")
export default class FcjController {
  @operation({
    summary: "Get Fcj",
  })
  @get()
  static getFcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcj",
  })
  @post("{id}")
  static createFcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

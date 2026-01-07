import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtj")
export default class MtjController {
  @operation({
    summary: "Get Mtj",
  })
  @get()
  static getMtj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtj",
  })
  @post("{id}")
  static createMtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

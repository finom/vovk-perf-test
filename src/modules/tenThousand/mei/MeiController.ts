import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mei")
export default class MeiController {
  @operation({
    summary: "Get Mei",
  })
  @get()
  static getMei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mei",
  })
  @post("{id}")
  static createMei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

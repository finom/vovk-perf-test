import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ths")
export default class ThController {
  @operation({
    summary: "Get Ths",
  })
  @get()
  static getThs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Th",
  })
  @post("{id}")
  static createTh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

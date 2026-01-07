import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agl")
export default class AglController {
  @operation({
    summary: "Get Agl",
  })
  @get()
  static getAgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agl",
  })
  @post("{id}")
  static createAgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ff")
export default class FfController {
  @operation({
    summary: "Get Ff",
  })
  @get()
  static getFf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ff",
  })
  @post("{id}")
  static createFf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

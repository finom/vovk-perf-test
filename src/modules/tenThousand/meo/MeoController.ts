import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meo")
export default class MeoController {
  @operation({
    summary: "Get Meo",
  })
  @get()
  static getMeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meo",
  })
  @post("{id}")
  static createMeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

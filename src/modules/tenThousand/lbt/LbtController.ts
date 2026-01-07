import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbt")
export default class LbtController {
  @operation({
    summary: "Get Lbt",
  })
  @get()
  static getLbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbt",
  })
  @post("{id}")
  static createLbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

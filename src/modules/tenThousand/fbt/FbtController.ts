import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbt")
export default class FbtController {
  @operation({
    summary: "Get Fbt",
  })
  @get()
  static getFbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbt",
  })
  @post("{id}")
  static createFbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

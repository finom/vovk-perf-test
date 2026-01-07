import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meh")
export default class MehController {
  @operation({
    summary: "Get Meh",
  })
  @get()
  static getMeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meh",
  })
  @post("{id}")
  static createMeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

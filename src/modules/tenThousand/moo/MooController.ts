import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moo")
export default class MooController {
  @operation({
    summary: "Get Moo",
  })
  @get()
  static getMoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moo",
  })
  @post("{id}")
  static createMoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

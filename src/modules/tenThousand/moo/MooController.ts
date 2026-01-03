import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moos")
export default class MooController {
  @operation({
    summary: "Get Moos",
  })
  @get()
  static getMoos = procedure({
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

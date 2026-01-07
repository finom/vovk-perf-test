import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzy")
export default class MzyController {
  @operation({
    summary: "Get Mzy",
  })
  @get()
  static getMzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzy",
  })
  @post("{id}")
  static createMzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

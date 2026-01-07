import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maw")
export default class MawController {
  @operation({
    summary: "Get Maw",
  })
  @get()
  static getMaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maw",
  })
  @post("{id}")
  static createMaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

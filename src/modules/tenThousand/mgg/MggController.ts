import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mggs")
export default class MggController {
  @operation({
    summary: "Get Mggs",
  })
  @get()
  static getMggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgg",
  })
  @post("{id}")
  static createMgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

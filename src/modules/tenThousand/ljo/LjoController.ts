import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljos")
export default class LjoController {
  @operation({
    summary: "Get Ljos",
  })
  @get()
  static getLjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljo",
  })
  @post("{id}")
  static createLjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

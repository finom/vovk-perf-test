import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mogs")
export default class MogController {
  @operation({
    summary: "Get Mogs",
  })
  @get()
  static getMogs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mog",
  })
  @post("{id}")
  static createMog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

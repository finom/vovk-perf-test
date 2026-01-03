import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjns")
export default class MjnController {
  @operation({
    summary: "Get Mjns",
  })
  @get()
  static getMjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjn",
  })
  @post("{id}")
  static createMjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

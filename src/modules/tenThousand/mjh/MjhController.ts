import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjhs")
export default class MjhController {
  @operation({
    summary: "Get Mjhs",
  })
  @get()
  static getMjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjh",
  })
  @post("{id}")
  static createMjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

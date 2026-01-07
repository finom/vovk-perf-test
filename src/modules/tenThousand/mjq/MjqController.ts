import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjq")
export default class MjqController {
  @operation({
    summary: "Get Mjq",
  })
  @get()
  static getMjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjq",
  })
  @post("{id}")
  static createMjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

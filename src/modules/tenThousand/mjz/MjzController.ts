import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjzs")
export default class MjzController {
  @operation({
    summary: "Get Mjzs",
  })
  @get()
  static getMjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjz",
  })
  @post("{id}")
  static createMjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

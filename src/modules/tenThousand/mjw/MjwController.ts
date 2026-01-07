import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjw")
export default class MjwController {
  @operation({
    summary: "Get Mjw",
  })
  @get()
  static getMjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjw",
  })
  @post("{id}")
  static createMjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjps")
export default class MjpController {
  @operation({
    summary: "Get Mjps",
  })
  @get()
  static getMjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjp",
  })
  @post("{id}")
  static createMjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

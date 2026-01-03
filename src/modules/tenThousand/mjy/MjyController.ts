import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjies")
export default class MjyController {
  @operation({
    summary: "Get Mjies",
  })
  @get()
  static getMjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjy",
  })
  @post("{id}")
  static createMjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

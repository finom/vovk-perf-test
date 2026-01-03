import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkies")
export default class MkyController {
  @operation({
    summary: "Get Mkies",
  })
  @get()
  static getMkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mky",
  })
  @post("{id}")
  static createMky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

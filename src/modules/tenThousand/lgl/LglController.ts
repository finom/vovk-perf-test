import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgl")
export default class LglController {
  @operation({
    summary: "Get Lgl",
  })
  @get()
  static getLgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgl",
  })
  @post("{id}")
  static createLgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

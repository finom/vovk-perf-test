import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lms")
export default class LmsController {
  @operation({
    summary: "Get Lms",
  })
  @get()
  static getLms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lms",
  })
  @post("{id}")
  static createLms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

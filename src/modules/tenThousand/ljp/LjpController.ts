import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljps")
export default class LjpController {
  @operation({
    summary: "Get Ljps",
  })
  @get()
  static getLjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljp",
  })
  @post("{id}")
  static createLjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

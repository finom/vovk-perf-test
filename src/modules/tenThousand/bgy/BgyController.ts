import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgies")
export default class BgyController {
  @operation({
    summary: "Get Bgies",
  })
  @get()
  static getBgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgy",
  })
  @post("{id}")
  static createBgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

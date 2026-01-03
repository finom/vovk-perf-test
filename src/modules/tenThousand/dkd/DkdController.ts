import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkds")
export default class DkdController {
  @operation({
    summary: "Get Dkds",
  })
  @get()
  static getDkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkd",
  })
  @post("{id}")
  static createDkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

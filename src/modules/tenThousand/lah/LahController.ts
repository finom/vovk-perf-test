import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lah")
export default class LahController {
  @operation({
    summary: "Get Lah",
  })
  @get()
  static getLah = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lah",
  })
  @post("{id}")
  static createLah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

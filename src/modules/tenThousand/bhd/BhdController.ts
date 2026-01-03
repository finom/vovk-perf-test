import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhds")
export default class BhdController {
  @operation({
    summary: "Get Bhds",
  })
  @get()
  static getBhds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhd",
  })
  @post("{id}")
  static createBhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

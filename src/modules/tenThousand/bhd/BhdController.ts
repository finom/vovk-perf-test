import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhd")
export default class BhdController {
  @operation({
    summary: "Get Bhd",
  })
  @get()
  static getBhd = procedure({
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

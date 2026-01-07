import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzn")
export default class MznController {
  @operation({
    summary: "Get Mzn",
  })
  @get()
  static getMzn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzn",
  })
  @post("{id}")
  static createMzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

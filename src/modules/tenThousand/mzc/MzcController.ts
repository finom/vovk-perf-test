import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzcs")
export default class MzcController {
  @operation({
    summary: "Get Mzcs",
  })
  @get()
  static getMzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzc",
  })
  @post("{id}")
  static createMzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

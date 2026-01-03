import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myks")
export default class MykController {
  @operation({
    summary: "Get Myks",
  })
  @get()
  static getMyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myk",
  })
  @post("{id}")
  static createMyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

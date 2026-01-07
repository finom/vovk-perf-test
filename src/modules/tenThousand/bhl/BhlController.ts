import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhl")
export default class BhlController {
  @operation({
    summary: "Get Bhl",
  })
  @get()
  static getBhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhl",
  })
  @post("{id}")
  static createBhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsy")
export default class BsyController {
  @operation({
    summary: "Get Bsy",
  })
  @get()
  static getBsy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsy",
  })
  @post("{id}")
  static createBsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

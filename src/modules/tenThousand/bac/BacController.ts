import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bacs")
export default class BacController {
  @operation({
    summary: "Get Bacs",
  })
  @get()
  static getBacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bac",
  })
  @post("{id}")
  static createBac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

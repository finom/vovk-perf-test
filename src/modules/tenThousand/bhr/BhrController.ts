import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhr")
export default class BhrController {
  @operation({
    summary: "Get Bhr",
  })
  @get()
  static getBhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhr",
  })
  @post("{id}")
  static createBhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

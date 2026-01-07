import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfj")
export default class DfjController {
  @operation({
    summary: "Get Dfj",
  })
  @get()
  static getDfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfj",
  })
  @post("{id}")
  static createDfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

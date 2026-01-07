import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boz")
export default class BozController {
  @operation({
    summary: "Get Boz",
  })
  @get()
  static getBoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boz",
  })
  @post("{id}")
  static createBoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

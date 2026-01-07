import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsd")
export default class DsdController {
  @operation({
    summary: "Get Dsd",
  })
  @get()
  static getDsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsd",
  })
  @post("{id}")
  static createDsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

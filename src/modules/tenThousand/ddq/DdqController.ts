import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddq")
export default class DdqController {
  @operation({
    summary: "Get Ddq",
  })
  @get()
  static getDdq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddq",
  })
  @post("{id}")
  static createDdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dles")
export default class DleController {
  @operation({
    summary: "Get Dles",
  })
  @get()
  static getDles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dle",
  })
  @post("{id}")
  static createDle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

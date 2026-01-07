import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dau")
export default class DauController {
  @operation({
    summary: "Get Dau",
  })
  @get()
  static getDau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dau",
  })
  @post("{id}")
  static createDau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

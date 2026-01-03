import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daus")
export default class DauController {
  @operation({
    summary: "Get Daus",
  })
  @get()
  static getDaus = procedure({
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

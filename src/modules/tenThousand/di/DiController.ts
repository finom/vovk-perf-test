import { procedure, prefix, get, post, operation } from "vovk";

@prefix("di")
export default class DiController {
  @operation({
    summary: "Get Di",
  })
  @get()
  static getDi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Di",
  })
  @post("{id}")
  static createDi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

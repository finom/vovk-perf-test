import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhjs")
export default class DhjController {
  @operation({
    summary: "Get Dhjs",
  })
  @get()
  static getDhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhj",
  })
  @post("{id}")
  static createDhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

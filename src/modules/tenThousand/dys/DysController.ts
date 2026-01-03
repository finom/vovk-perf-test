import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dys")
export default class DysController {
  @operation({
    summary: "Get Dys",
  })
  @get()
  static getDys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dys",
  })
  @post("{id}")
  static createDys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

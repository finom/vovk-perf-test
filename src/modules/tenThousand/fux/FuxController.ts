import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fux")
export default class FuxController {
  @operation({
    summary: "Get Fux",
  })
  @get()
  static getFux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fux",
  })
  @post("{id}")
  static createFux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

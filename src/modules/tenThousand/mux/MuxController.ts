import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mux")
export default class MuxController {
  @operation({
    summary: "Get Mux",
  })
  @get()
  static getMux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mux",
  })
  @post("{id}")
  static createMux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dii")
export default class DiiController {
  @operation({
    summary: "Get Dii",
  })
  @get()
  static getDii = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dii",
  })
  @post("{id}")
  static createDii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

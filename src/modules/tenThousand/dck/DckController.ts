import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dck")
export default class DckController {
  @operation({
    summary: "Get Dck",
  })
  @get()
  static getDck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dck",
  })
  @post("{id}")
  static createDck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

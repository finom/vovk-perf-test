import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcd")
export default class DcdController {
  @operation({
    summary: "Get Dcd",
  })
  @get()
  static getDcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcd",
  })
  @post("{id}")
  static createDcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsk")
export default class DskController {
  @operation({
    summary: "Get Dsk",
  })
  @get()
  static getDsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsk",
  })
  @post("{id}")
  static createDsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

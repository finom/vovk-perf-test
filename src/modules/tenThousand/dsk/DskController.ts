import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsks")
export default class DskController {
  @operation({
    summary: "Get Dsks",
  })
  @get()
  static getDsks = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dahs")
export default class DahController {
  @operation({
    summary: "Get Dahs",
  })
  @get()
  static getDahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dah",
  })
  @post("{id}")
  static createDah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

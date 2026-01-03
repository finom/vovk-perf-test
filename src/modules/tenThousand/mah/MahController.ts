import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mahs")
export default class MahController {
  @operation({
    summary: "Get Mahs",
  })
  @get()
  static getMahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mah",
  })
  @post("{id}")
  static createMah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

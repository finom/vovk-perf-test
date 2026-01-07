import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mah")
export default class MahController {
  @operation({
    summary: "Get Mah",
  })
  @get()
  static getMah = procedure({
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

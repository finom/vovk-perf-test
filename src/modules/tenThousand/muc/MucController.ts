import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muc")
export default class MucController {
  @operation({
    summary: "Get Muc",
  })
  @get()
  static getMuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muc",
  })
  @post("{id}")
  static createMuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

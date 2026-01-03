import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhs")
export default class MhsController {
  @operation({
    summary: "Get Mhs",
  })
  @get()
  static getMhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhs",
  })
  @post("{id}")
  static createMhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

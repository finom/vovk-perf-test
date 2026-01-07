import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fau")
export default class FauController {
  @operation({
    summary: "Get Fau",
  })
  @get()
  static getFau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fau",
  })
  @post("{id}")
  static createFau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

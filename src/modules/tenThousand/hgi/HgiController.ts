import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgi")
export default class HgiController {
  @operation({
    summary: "Get Hgi",
  })
  @get()
  static getHgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgi",
  })
  @post("{id}")
  static createHgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

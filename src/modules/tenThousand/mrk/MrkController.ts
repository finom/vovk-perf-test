import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrk")
export default class MrkController {
  @operation({
    summary: "Get Mrk",
  })
  @get()
  static getMrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrk",
  })
  @post("{id}")
  static createMrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

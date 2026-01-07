import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffk")
export default class FfkController {
  @operation({
    summary: "Get Ffk",
  })
  @get()
  static getFfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffk",
  })
  @post("{id}")
  static createFfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

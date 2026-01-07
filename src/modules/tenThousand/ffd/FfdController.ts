import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffd")
export default class FfdController {
  @operation({
    summary: "Get Ffd",
  })
  @get()
  static getFfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffd",
  })
  @post("{id}")
  static createFfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

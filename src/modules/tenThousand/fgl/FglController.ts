import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgl")
export default class FglController {
  @operation({
    summary: "Get Fgl",
  })
  @get()
  static getFgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgl",
  })
  @post("{id}")
  static createFgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

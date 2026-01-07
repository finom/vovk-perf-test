import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnw")
export default class MnwController {
  @operation({
    summary: "Get Mnw",
  })
  @get()
  static getMnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnw",
  })
  @post("{id}")
  static createMnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

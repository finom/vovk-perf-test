import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fer")
export default class FerController {
  @operation({
    summary: "Get Fer",
  })
  @get()
  static getFer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fer",
  })
  @post("{id}")
  static createFer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mca")
export default class McaController {
  @operation({
    summary: "Get Mca",
  })
  @get()
  static getMca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mca",
  })
  @post("{id}")
  static createMca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

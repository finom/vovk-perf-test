import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdus")
export default class MduController {
  @operation({
    summary: "Get Mdus",
  })
  @get()
  static getMdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdu",
  })
  @post("{id}")
  static createMdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

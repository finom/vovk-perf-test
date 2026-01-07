import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msh")
export default class MshController {
  @operation({
    summary: "Get Msh",
  })
  @get()
  static getMsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msh",
  })
  @post("{id}")
  static createMsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

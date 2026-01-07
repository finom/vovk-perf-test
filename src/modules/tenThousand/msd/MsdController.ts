import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msd")
export default class MsdController {
  @operation({
    summary: "Get Msd",
  })
  @get()
  static getMsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msd",
  })
  @post("{id}")
  static createMsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

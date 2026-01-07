import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsw")
export default class NswController {
  @operation({
    summary: "Get Nsw",
  })
  @get()
  static getNsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsw",
  })
  @post("{id}")
  static createNsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

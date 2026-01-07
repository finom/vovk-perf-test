import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsq")
export default class NsqController {
  @operation({
    summary: "Get Nsq",
  })
  @get()
  static getNsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsq",
  })
  @post("{id}")
  static createNsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

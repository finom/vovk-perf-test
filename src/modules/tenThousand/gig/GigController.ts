import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gig")
export default class GigController {
  @operation({
    summary: "Get Gig",
  })
  @get()
  static getGig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gig",
  })
  @post("{id}")
  static createGig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

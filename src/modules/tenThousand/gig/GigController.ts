import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gig")
export default class GigController {
  @operation({
    summary: "Get Gig",
  })
  @get()
  static getGig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gig",
  })
  @post("{id}")
  static createGig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

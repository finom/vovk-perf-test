import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gig")
export default class GigController {
  @operation({
    summary: "Get Gig",
  })
  @get()
  static getGig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gig",
  })
  @post("{id}")
  static createGig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

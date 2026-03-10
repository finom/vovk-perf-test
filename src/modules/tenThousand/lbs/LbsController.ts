import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbs")
export default class LbsController {
  @operation({
    summary: "Get Lbs",
  })
  @get()
  static getLbs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbs",
  })
  @post("{id}")
  static createLbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

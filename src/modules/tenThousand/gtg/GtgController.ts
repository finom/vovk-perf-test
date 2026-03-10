import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtg")
export default class GtgController {
  @operation({
    summary: "Get Gtg",
  })
  @get()
  static getGtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtg",
  })
  @post("{id}")
  static createGtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtq")
export default class GtqController {
  @operation({
    summary: "Get Gtq",
  })
  @get()
  static getGtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtq",
  })
  @post("{id}")
  static createGtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

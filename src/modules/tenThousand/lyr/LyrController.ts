import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyr")
export default class LyrController {
  @operation({
    summary: "Get Lyr",
  })
  @get()
  static getLyr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyr",
  })
  @post("{id}")
  static createLyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

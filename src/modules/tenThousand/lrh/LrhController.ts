import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrh")
export default class LrhController {
  @operation({
    summary: "Get Lrh",
  })
  @get()
  static getLrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrh",
  })
  @post("{id}")
  static createLrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

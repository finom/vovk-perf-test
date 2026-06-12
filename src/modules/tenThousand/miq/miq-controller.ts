import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("miq")
export default class MiqController {
  @operation({
    summary: "Get Miq",
  })
  @get()
  static getMiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Miq",
  })
  @post("{id}")
  static createMiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

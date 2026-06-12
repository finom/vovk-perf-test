import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llo")
export default class LloController {
  @operation({
    summary: "Get Llo",
  })
  @get()
  static getLlo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llo",
  })
  @post("{id}")
  static createLlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtg")
export default class MtgController {
  @operation({
    summary: "Get Mtg",
  })
  @get()
  static getMtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtg",
  })
  @post("{id}")
  static createMtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

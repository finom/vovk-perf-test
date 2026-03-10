import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msd")
export default class MsdController {
  @operation({
    summary: "Get Msd",
  })
  @get()
  static getMsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msd",
  })
  @post("{id}")
  static createMsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

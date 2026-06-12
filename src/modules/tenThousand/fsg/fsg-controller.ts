import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsg")
export default class FsgController {
  @operation({
    summary: "Get Fsg",
  })
  @get()
  static getFsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsg",
  })
  @post("{id}")
  static createFsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fh")
export default class FhController {
  @operation({
    summary: "Get Fh",
  })
  @get()
  static getFh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fh",
  })
  @post("{id}")
  static createFh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

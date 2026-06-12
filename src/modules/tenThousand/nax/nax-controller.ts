import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nax")
export default class NaxController {
  @operation({
    summary: "Get Nax",
  })
  @get()
  static getNax = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nax",
  })
  @post("{id}")
  static createNax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlt")
export default class NltController {
  @operation({
    summary: "Get Nlt",
  })
  @get()
  static getNlt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlt",
  })
  @post("{id}")
  static createNlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

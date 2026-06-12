import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lue")
export default class LueController {
  @operation({
    summary: "Get Lue",
  })
  @get()
  static getLue = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lue",
  })
  @post("{id}")
  static createLue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

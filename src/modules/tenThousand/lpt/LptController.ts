import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpt")
export default class LptController {
  @operation({
    summary: "Get Lpt",
  })
  @get()
  static getLpt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpt",
  })
  @post("{id}")
  static createLpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

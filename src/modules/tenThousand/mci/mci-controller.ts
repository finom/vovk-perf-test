import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mci")
export default class MciController {
  @operation({
    summary: "Get Mci",
  })
  @get()
  static getMci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mci",
  })
  @post("{id}")
  static createMci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lij")
export default class LijController {
  @operation({
    summary: "Get Lij",
  })
  @get()
  static getLij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lij",
  })
  @post("{id}")
  static createLij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

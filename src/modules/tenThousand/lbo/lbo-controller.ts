import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbo")
export default class LboController {
  @operation({
    summary: "Get Lbo",
  })
  @get()
  static getLbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbo",
  })
  @post("{id}")
  static createLbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdn")
export default class JdnController {
  @operation({
    summary: "Get Jdn",
  })
  @get()
  static getJdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdn",
  })
  @post("{id}")
  static createJdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

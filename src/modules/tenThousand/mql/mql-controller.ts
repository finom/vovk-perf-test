import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mql")
export default class MqlController {
  @operation({
    summary: "Get Mql",
  })
  @get()
  static getMql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mql",
  })
  @post("{id}")
  static createMql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

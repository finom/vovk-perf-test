import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rm")
export default class RmController {
  @operation({
    summary: "Get Rm",
  })
  @get()
  static getRm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rm",
  })
  @post("{id}")
  static createRm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

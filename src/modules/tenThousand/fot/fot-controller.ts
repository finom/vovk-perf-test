import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fot")
export default class FotController {
  @operation({
    summary: "Get Fot",
  })
  @get()
  static getFot = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fot",
  })
  @post("{id}")
  static createFot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

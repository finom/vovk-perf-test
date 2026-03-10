import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdn")
export default class FdnController {
  @operation({
    summary: "Get Fdn",
  })
  @get()
  static getFdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdn",
  })
  @post("{id}")
  static createFdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

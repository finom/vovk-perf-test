import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mva")
export default class MvaController {
  @operation({
    summary: "Get Mva",
  })
  @get()
  static getMva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mva",
  })
  @post("{id}")
  static createMva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

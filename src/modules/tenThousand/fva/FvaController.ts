import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fva")
export default class FvaController {
  @operation({
    summary: "Get Fva",
  })
  @get()
  static getFva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fva",
  })
  @post("{id}")
  static createFva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rh")
export default class RhController {
  @operation({
    summary: "Get Rh",
  })
  @get()
  static getRh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rh",
  })
  @post("{id}")
  static createRh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

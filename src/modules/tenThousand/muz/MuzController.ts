import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muz")
export default class MuzController {
  @operation({
    summary: "Get Muz",
  })
  @get()
  static getMuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muz",
  })
  @post("{id}")
  static createMuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

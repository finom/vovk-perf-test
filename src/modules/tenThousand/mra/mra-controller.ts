import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mra")
export default class MraController {
  @operation({
    summary: "Get Mra",
  })
  @get()
  static getMra = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mra",
  })
  @post("{id}")
  static createMra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

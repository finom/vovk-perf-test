import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjm")
export default class FjmController {
  @operation({
    summary: "Get Fjm",
  })
  @get()
  static getFjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjm",
  })
  @post("{id}")
  static createFjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

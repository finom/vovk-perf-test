import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjw")
export default class FjwController {
  @operation({
    summary: "Get Fjw",
  })
  @get()
  static getFjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjw",
  })
  @post("{id}")
  static createFjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

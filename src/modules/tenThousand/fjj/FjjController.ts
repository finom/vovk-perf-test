import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjj")
export default class FjjController {
  @operation({
    summary: "Get Fjj",
  })
  @get()
  static getFjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjj",
  })
  @post("{id}")
  static createFjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjy")
export default class FjyController {
  @operation({
    summary: "Get Fjy",
  })
  @get()
  static getFjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjy",
  })
  @post("{id}")
  static createFjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

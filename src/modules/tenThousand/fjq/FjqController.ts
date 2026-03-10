import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjq")
export default class FjqController {
  @operation({
    summary: "Get Fjq",
  })
  @get()
  static getFjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjq",
  })
  @post("{id}")
  static createFjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

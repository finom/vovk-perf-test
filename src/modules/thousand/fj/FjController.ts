import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fj")
export default class FjController {
  @operation({
    summary: "Get Fj",
  })
  @get()
  static getFj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fj",
  })
  @post("{id}")
  static createFj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

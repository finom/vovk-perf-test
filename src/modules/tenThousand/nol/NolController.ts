import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nol")
export default class NolController {
  @operation({
    summary: "Get Nol",
  })
  @get()
  static getNol = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nol",
  })
  @post("{id}")
  static createNol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

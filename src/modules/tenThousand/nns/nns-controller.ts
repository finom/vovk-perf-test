import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nns")
export default class NnsController {
  @operation({
    summary: "Get Nns",
  })
  @get()
  static getNns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nns",
  })
  @post("{id}")
  static createNns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

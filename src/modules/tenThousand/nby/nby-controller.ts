import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nby")
export default class NbyController {
  @operation({
    summary: "Get Nby",
  })
  @get()
  static getNby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nby",
  })
  @post("{id}")
  static createNby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("neb")
export default class NebController {
  @operation({
    summary: "Get Neb",
  })
  @get()
  static getNeb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Neb",
  })
  @post("{id}")
  static createNeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

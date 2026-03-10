import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsz")
export default class NszController {
  @operation({
    summary: "Get Nsz",
  })
  @get()
  static getNsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsz",
  })
  @post("{id}")
  static createNsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

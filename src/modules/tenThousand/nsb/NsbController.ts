import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsb")
export default class NsbController {
  @operation({
    summary: "Get Nsb",
  })
  @get()
  static getNsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsb",
  })
  @post("{id}")
  static createNsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

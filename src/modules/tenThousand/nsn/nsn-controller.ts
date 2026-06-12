import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsn")
export default class NsnController {
  @operation({
    summary: "Get Nsn",
  })
  @get()
  static getNsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsn",
  })
  @post("{id}")
  static createNsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

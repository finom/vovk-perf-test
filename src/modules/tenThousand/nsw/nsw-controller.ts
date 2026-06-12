import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsw")
export default class NswController {
  @operation({
    summary: "Get Nsw",
  })
  @get()
  static getNsw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsw",
  })
  @post("{id}")
  static createNsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

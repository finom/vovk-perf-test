import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clm")
export default class ClmController {
  @operation({
    summary: "Get Clm",
  })
  @get()
  static getClm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clm",
  })
  @post("{id}")
  static createClm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

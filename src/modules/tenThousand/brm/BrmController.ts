import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brm")
export default class BrmController {
  @operation({
    summary: "Get Brm",
  })
  @get()
  static getBrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brm",
  })
  @post("{id}")
  static createBrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

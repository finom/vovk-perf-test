import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwn")
export default class FwnController {
  @operation({
    summary: "Get Fwn",
  })
  @get()
  static getFwn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwn",
  })
  @post("{id}")
  static createFwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

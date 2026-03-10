import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nch")
export default class NchController {
  @operation({
    summary: "Get Nch",
  })
  @get()
  static getNch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nch",
  })
  @post("{id}")
  static createNch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

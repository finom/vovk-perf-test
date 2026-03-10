import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gix")
export default class GixController {
  @operation({
    summary: "Get Gix",
  })
  @get()
  static getGix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gix",
  })
  @post("{id}")
  static createGix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

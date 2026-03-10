import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnm")
export default class GnmController {
  @operation({
    summary: "Get Gnm",
  })
  @get()
  static getGnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnm",
  })
  @post("{id}")
  static createGnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("om")
export default class OmController {
  @operation({
    summary: "Get Om",
  })
  @get()
  static getOm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Om",
  })
  @post("{id}")
  static createOm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

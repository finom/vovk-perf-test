import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mae")
export default class MaeController {
  @operation({
    summary: "Get Mae",
  })
  @get()
  static getMae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mae",
  })
  @post("{id}")
  static createMae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

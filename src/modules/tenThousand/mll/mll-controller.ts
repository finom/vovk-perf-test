import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mll")
export default class MllController {
  @operation({
    summary: "Get Mll",
  })
  @get()
  static getMll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mll",
  })
  @post("{id}")
  static createMll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

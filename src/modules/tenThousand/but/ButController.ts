import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("but")
export default class ButController {
  @operation({
    summary: "Get But",
  })
  @get()
  static getBut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create But",
  })
  @post("{id}")
  static createBut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljm")
export default class LjmController {
  @operation({
    summary: "Get Ljm",
  })
  @get()
  static getLjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljm",
  })
  @post("{id}")
  static createLjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

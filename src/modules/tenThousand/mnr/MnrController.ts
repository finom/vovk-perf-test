import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnr")
export default class MnrController {
  @operation({
    summary: "Get Mnr",
  })
  @get()
  static getMnr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnr",
  })
  @post("{id}")
  static createMnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

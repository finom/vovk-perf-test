import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnv")
export default class MnvController {
  @operation({
    summary: "Get Mnv",
  })
  @get()
  static getMnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnv",
  })
  @post("{id}")
  static createMnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

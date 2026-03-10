import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnj")
export default class MnjController {
  @operation({
    summary: "Get Mnj",
  })
  @get()
  static getMnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnj",
  })
  @post("{id}")
  static createMnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

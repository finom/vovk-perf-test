import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lia")
export default class LiaController {
  @operation({
    summary: "Get Lia",
  })
  @get()
  static getLia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lia",
  })
  @post("{id}")
  static createLia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

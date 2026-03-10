import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hiz")
export default class HizController {
  @operation({
    summary: "Get Hiz",
  })
  @get()
  static getHiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hiz",
  })
  @post("{id}")
  static createHiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

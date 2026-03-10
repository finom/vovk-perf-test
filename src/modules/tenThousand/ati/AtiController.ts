import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ati")
export default class AtiController {
  @operation({
    summary: "Get Ati",
  })
  @get()
  static getAti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ati",
  })
  @post("{id}")
  static createAti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

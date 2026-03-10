import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("haw")
export default class HawController {
  @operation({
    summary: "Get Haw",
  })
  @get()
  static getHaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Haw",
  })
  @post("{id}")
  static createHaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

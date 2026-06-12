import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("heb")
export default class HebController {
  @operation({
    summary: "Get Heb",
  })
  @get()
  static getHeb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Heb",
  })
  @post("{id}")
  static createHeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

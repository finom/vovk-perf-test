import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjw")
export default class HjwController {
  @operation({
    summary: "Get Hjw",
  })
  @get()
  static getHjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjw",
  })
  @post("{id}")
  static createHjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

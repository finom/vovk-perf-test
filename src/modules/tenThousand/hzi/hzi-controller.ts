import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzi")
export default class HziController {
  @operation({
    summary: "Get Hzi",
  })
  @get()
  static getHzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzi",
  })
  @post("{id}")
  static createHzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

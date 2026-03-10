import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahq")
export default class AhqController {
  @operation({
    summary: "Get Ahq",
  })
  @get()
  static getAhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahq",
  })
  @post("{id}")
  static createAhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

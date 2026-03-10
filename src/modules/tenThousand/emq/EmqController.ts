import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emq")
export default class EmqController {
  @operation({
    summary: "Get Emq",
  })
  @get()
  static getEmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emq",
  })
  @post("{id}")
  static createEmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

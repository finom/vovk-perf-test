import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("end")
export default class EndController {
  @operation({
    summary: "Get End",
  })
  @get()
  static getEnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create End",
  })
  @post("{id}")
  static createEnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

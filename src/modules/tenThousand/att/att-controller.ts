import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("att")
export default class AttController {
  @operation({
    summary: "Get Att",
  })
  @get()
  static getAtt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Att",
  })
  @post("{id}")
  static createAtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

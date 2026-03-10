import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrc")
export default class HrcController {
  @operation({
    summary: "Get Hrc",
  })
  @get()
  static getHrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrc",
  })
  @post("{id}")
  static createHrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

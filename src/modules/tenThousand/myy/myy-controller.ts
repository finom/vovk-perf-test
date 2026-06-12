import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myy")
export default class MyyController {
  @operation({
    summary: "Get Myy",
  })
  @get()
  static getMyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myy",
  })
  @post("{id}")
  static createMyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

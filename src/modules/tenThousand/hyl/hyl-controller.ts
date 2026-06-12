import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyl")
export default class HylController {
  @operation({
    summary: "Get Hyl",
  })
  @get()
  static getHyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyl",
  })
  @post("{id}")
  static createHyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtr")
export default class GtrController {
  @operation({
    summary: "Get Gtr",
  })
  @get()
  static getGtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtr",
  })
  @post("{id}")
  static createGtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmy")
export default class GmyController {
  @operation({
    summary: "Get Gmy",
  })
  @get()
  static getGmy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmy",
  })
  @post("{id}")
  static createGmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

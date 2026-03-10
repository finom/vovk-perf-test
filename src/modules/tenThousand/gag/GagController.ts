import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gag")
export default class GagController {
  @operation({
    summary: "Get Gag",
  })
  @get()
  static getGag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gag",
  })
  @post("{id}")
  static createGag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

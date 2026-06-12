import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ght")
export default class GhtController {
  @operation({
    summary: "Get Ght",
  })
  @get()
  static getGht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ght",
  })
  @post("{id}")
  static createGht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

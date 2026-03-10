import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hip")
export default class HipController {
  @operation({
    summary: "Get Hip",
  })
  @get()
  static getHip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hip",
  })
  @post("{id}")
  static createHip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

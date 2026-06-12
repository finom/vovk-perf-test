import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyp")
export default class GypController {
  @operation({
    summary: "Get Gyp",
  })
  @get()
  static getGyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyp",
  })
  @post("{id}")
  static createGyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

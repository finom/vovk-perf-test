import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdq")
export default class GdqController {
  @operation({
    summary: "Get Gdq",
  })
  @get()
  static getGdq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdq",
  })
  @post("{id}")
  static createGdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

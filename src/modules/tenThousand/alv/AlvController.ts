import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alv")
export default class AlvController {
  @operation({
    summary: "Get Alv",
  })
  @get()
  static getAlv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alv",
  })
  @post("{id}")
  static createAlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

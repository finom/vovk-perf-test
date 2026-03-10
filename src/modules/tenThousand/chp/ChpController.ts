import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chp")
export default class ChpController {
  @operation({
    summary: "Get Chp",
  })
  @get()
  static getChp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chp",
  })
  @post("{id}")
  static createChp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

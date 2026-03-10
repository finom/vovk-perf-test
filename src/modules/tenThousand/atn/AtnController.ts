import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atn")
export default class AtnController {
  @operation({
    summary: "Get Atn",
  })
  @get()
  static getAtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atn",
  })
  @post("{id}")
  static createAtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

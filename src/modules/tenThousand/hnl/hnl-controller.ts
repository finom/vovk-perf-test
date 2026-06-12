import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnl")
export default class HnlController {
  @operation({
    summary: "Get Hnl",
  })
  @get()
  static getHnl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnl",
  })
  @post("{id}")
  static createHnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

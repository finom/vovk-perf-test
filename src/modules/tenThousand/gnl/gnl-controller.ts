import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnl")
export default class GnlController {
  @operation({
    summary: "Get Gnl",
  })
  @get()
  static getGnl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnl",
  })
  @post("{id}")
  static createGnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

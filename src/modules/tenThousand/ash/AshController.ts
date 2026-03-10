import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ash")
export default class AshController {
  @operation({
    summary: "Get Ash",
  })
  @get()
  static getAsh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ash",
  })
  @post("{id}")
  static createAsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhd")
export default class JhdController {
  @operation({
    summary: "Get Jhd",
  })
  @get()
  static getJhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhd",
  })
  @post("{id}")
  static createJhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

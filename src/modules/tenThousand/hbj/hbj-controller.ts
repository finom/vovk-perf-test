import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbj")
export default class HbjController {
  @operation({
    summary: "Get Hbj",
  })
  @get()
  static getHbj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbj",
  })
  @post("{id}")
  static createHbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

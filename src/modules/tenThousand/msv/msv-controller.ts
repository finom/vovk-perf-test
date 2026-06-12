import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msv")
export default class MsvController {
  @operation({
    summary: "Get Msv",
  })
  @get()
  static getMsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msv",
  })
  @post("{id}")
  static createMsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

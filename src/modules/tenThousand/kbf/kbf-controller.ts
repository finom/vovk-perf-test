import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbf")
export default class KbfController {
  @operation({
    summary: "Get Kbf",
  })
  @get()
  static getKbf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbf",
  })
  @post("{id}")
  static createKbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbh")
export default class KbhController {
  @operation({
    summary: "Get Kbh",
  })
  @get()
  static getKbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbh",
  })
  @post("{id}")
  static createKbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

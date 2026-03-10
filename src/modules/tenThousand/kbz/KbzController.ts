import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbz")
export default class KbzController {
  @operation({
    summary: "Get Kbz",
  })
  @get()
  static getKbz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbz",
  })
  @post("{id}")
  static createKbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

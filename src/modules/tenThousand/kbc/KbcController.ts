import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbc")
export default class KbcController {
  @operation({
    summary: "Get Kbc",
  })
  @get()
  static getKbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbc",
  })
  @post("{id}")
  static createKbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

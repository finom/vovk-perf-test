import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkp")
export default class KkpController {
  @operation({
    summary: "Get Kkp",
  })
  @get()
  static getKkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkp",
  })
  @post("{id}")
  static createKkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

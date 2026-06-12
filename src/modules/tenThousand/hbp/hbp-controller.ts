import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbp")
export default class HbpController {
  @operation({
    summary: "Get Hbp",
  })
  @get()
  static getHbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbp",
  })
  @post("{id}")
  static createHbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

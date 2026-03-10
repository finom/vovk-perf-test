import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbv")
export default class HbvController {
  @operation({
    summary: "Get Hbv",
  })
  @get()
  static getHbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbv",
  })
  @post("{id}")
  static createHbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

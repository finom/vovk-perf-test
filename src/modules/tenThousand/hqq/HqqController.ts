import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqq")
export default class HqqController {
  @operation({
    summary: "Get Hqq",
  })
  @get()
  static getHqq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqq",
  })
  @post("{id}")
  static createHqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdz")
export default class JdzController {
  @operation({
    summary: "Get Jdz",
  })
  @get()
  static getJdz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdz",
  })
  @post("{id}")
  static createJdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

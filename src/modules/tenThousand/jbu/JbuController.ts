import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbu")
export default class JbuController {
  @operation({
    summary: "Get Jbu",
  })
  @get()
  static getJbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbu",
  })
  @post("{id}")
  static createJbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

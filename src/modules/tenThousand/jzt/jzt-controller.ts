import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzt")
export default class JztController {
  @operation({
    summary: "Get Jzt",
  })
  @get()
  static getJzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzt",
  })
  @post("{id}")
  static createJzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
